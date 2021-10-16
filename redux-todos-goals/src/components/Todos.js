import React from "react";
import { connect } from "react-redux";
import {
  handleAddTodo,
  handleDeleteTodo,
  handleToggleTodo,
} from "../actions/todos";
import List from "./List";

const Todos = (props) => {
  let textInput = null;

  const addItem = (e) => {
    e.preventDefault();
    props.dispatch(
      handleAddTodo(textInput.value, () => (textInput.value = ""))
    );
  };

  const removeItem = (todo) => {
    props.dispatch(handleDeleteTodo(todo));
  };

  const toggleItem = (id) => {
    props.dispatch(handleToggleTodo(id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Add Todo"
        ref={(input) => {
          textInput = input;
        }}
      />
      <button onClick={addItem}>Add Todo</button>
      <List items={props.todos} remove={removeItem} toggle={toggleItem} />
    </div>
  );
};

export default connect((state) => ({
  todos: state.todos,
}))(Todos);
