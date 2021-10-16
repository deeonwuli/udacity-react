import React from "react";
import ConnectedTodos from "./Todos";
import ConnectedGoals from "./Goals";
import { handleInitialData } from "../actions/shared";
import { connect } from "react-redux";

class App extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitialData());
  }

  render() {
    if (this.props.loading === true) {
      return <h2>Loading</h2>;
    }

    return (
      <div>
        <ConnectedTodos />
        <ConnectedGoals />
      </div>
    );
  }
}

export default connect((state) => ({
  loading: state.loading,
}))(App);
