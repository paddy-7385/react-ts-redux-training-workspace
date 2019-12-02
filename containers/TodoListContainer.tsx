
import {connect} from "react-redux";
import TodoList from '../components/TodoList';
import { toggleTodo } from "../actions";

const mapStateToProps = state =>({
  todos: state.todos.filter(todo => {
    switch(state.filter){
      case "SHOW_COMPLETED":
          return todo.completed;
      case "SHOW_PENDING":
          return !todo.completed;
      default:
          return true;
    }
  })
});

const mapDispatchToProps = dispatch =>({
  onClick:  name => dispatch(toggleTodo(name))
});

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);