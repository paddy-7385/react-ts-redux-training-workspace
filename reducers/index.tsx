import { combineReducers } from "redux";
import todosReducer from "./todosReducer";
import filterReducer from "./filterReducer";

let reducer = 
combineReducers({ todos: todosReducer, filter: filterReducer });

export default reducer;