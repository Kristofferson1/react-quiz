import React, { Component } from "react";
import Quiz from "./components/Quiz";
import { connect } from "react-redux";
import "./App.css";

class App extends Component<any, any> {
  render() {
    return (
      <div className="App">
        <Quiz items={this.props.questions} />
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    questions: state.questions,
  };
};

const mapDispachToProps = (dispatch: any) => {
  return {
    // load: () => dispatch({ type: "loadQuestions", points: 0 }),
    // show: () => dispatch({ type: "showQuestions", points: 0 }),
    // fill: () => dispatch({ type: "fillQuestions", points: 0 }),
  };
};
export default connect(mapStateToProps, mapDispachToProps)(App);
