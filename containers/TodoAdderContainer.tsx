
//other way to create conatiner without component

import {connect} from "react-redux";
import AddTodo from '../components/AddTodo';
import { addTodo } from "../actions";

const mapStateToProps = state =>({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  onClickAdd : (text) => dispatch(addTodo(text))
});

export default connect(mapStateToProps,mapDispatchToProps)(AddTodo);