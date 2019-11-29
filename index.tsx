import { createStore, combineReducers } from "redux";
import todosReducer from "./reducers/todosReducer";
import filterReducer from "./reducers/filterReducer";

import { addTodo, toggleTodo, setFilter } from "./actions";

let store = createStore(
  combineReducers({ todos: todosReducer, filter: filterReducer })
);

store.subscribe(() => console.log(store.getState()));

store.dispatch(addTodo("Onion"));
store.dispatch(addTodo("Milk"));
store.dispatch(addTodo("Cheese"));
store.dispatch(toggleTodo("Milk"));
store.dispatch(setFilter("SHOW_COMPLETED"));
