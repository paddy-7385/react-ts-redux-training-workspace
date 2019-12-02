// import { createStore, combineReducers } from "redux";
// import todosReducer from "./reducers/todosReducer";
// import filterReducer from "./reducers/filterReducer";

// import { addTodo, toggleTodo, setFilter } from "./actions";

// let store = createStore(
//   combineReducers({ todos: todosReducer, filter: filterReducer })
// );

// store.subscribe(() => console.log(store.getState()));

// store.dispatch(addTodo("Onion"));
// store.dispatch(addTodo("Milk"));
// store.dispatch(addTodo("Cheese"));
// store.dispatch(toggleTodo("Milk"));
// store.dispatch(setFilter("SHOW_COMPLETED"));

import React, { Component } from 'react';
import { render } from 'react-dom';
import TodoList from './components/TodoList';

import FilterContainer from './containers/FilterContainer';
import TodoAdderContainer from './containers/TodoAdderContainer';
import { createStore} from "redux";
import { Provider  } from "react-redux";
import  reducer  from "./reducers";

import './style.css';

interface AppProps { }
interface AppState {
  name: string;
}


class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);

    this.state = {
      todos : []
    };

    this.onClickAddHandler = this.onClickAddHandler.bind(this);
  }

  OnChageHandler(value){
   console.log(value);
  }

  onClickAddHandler(item){
    var obj= {
      text : item,
      completed: false
    };
    var newTodos = [...this.state.todos,obj];
    this.setState({todos: newTodos });
  }

  render() {
    return (
      <div>      
        <FilterContainer />
        <TodoAdderContainer />
      </div>
    );
  }
}

const store = createStore(reducer);
store.subscribe(() => console.log(store.getState()));


render(
  <Provider store={store}>
  <App />
  </Provider>
  , 
  document.getElementById('root')
);
