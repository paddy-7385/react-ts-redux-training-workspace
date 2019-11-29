import {createStore, combineReducers} from 'redux';
import todosReducer from './reducers/todosReducer';
import filterReducer from './reducers/filterReducer';

let store = createStore(combineReducers({todos:todosReducer,filter:filterReducer}));

store.subscribe(()=> console.log(store.getState()));

store.dispatch({type: "ADD_TODO", text:"Onion"});
store.dispatch({type: "ADD_TODO", text:"Milk"});
store.dispatch({type: "ADD_TODO", text:"Cheese"});
store.dispatch({type: "TOGGLE_TODO", text:"Milk"});
store.dispatch({type: "SET_FILTER", visibility: "SHOW_COMPLETED"});


