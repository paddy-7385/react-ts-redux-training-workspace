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

import './style.css';

interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);

    var obj =  {
            text: 'Milk',
            completed: false
        };

    var obj2 =  {
        text: 'Onion',
        completed: true
    };
    this.state = {
      todos : [obj, obj2]
    };
  }

  OnChageHandler(){

  }
  render() {
    return (
      <div>
        <TodoList todos = {this.state.todos} onClick = {this.OnChageHandler}/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
