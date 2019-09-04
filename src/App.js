import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div>
          <span>{this.props.a}</span>
          <button onClick={() => this.props.updateA(this.props.b)}>
            update A
          </button>
        </div>
        <br />
        <div>
          <span>{this.props.b}</span>
          <button onClick={() => this.props.updateB(this.props.a)}>
            update B
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    a: store.rA.a,
    b: store.rB.b
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateA: b => dispatch({ type: "UPDATE_A", b: b }),
    updateB: a => dispatch({ type: "UPDATE_B", a: a })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
