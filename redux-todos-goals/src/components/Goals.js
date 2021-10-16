import React from "react";
import { connect } from "react-redux";
import { handleAddGoal, handleDeleteGoal } from "../actions/goals";
import List from "./List";

const Goals = (props) => {
  let textInput = null;

  const addItem = (e) => {
    e.preventDefault();
    props.dispatch(
      handleAddGoal(textInput.value, () => (textInput.value = ""))
    );
  };

  const removeItem = (goal) => {
    props.dispatch(handleDeleteGoal(goal));
  };

  return (
    <div>
      <h1>Goal List</h1>
      <input
        type="text"
        placeholder="Add Goal"
        ref={(input) => {
          textInput = input;
        }}
      />
      <button onClick={addItem}>Add Goal</button>
      <List items={props.goals} remove={removeItem} />
    </div>
  );
};

export default connect((state) => ({
  goals: state.goals,
}))(Goals);
