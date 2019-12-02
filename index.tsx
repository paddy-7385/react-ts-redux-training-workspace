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
import AddTodo from './components/AddTodo';

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

    this.OnChageHandler = this.OnChageHandler.bind(this);
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
        <AddTodo onClickAdd = {this.onClickAddHandler}/>
        <TodoList todos = {this.state.todos} onClick = {this.OnChageHandler}/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
