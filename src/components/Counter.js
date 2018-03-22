import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../actions/CounterActions";

class Counter extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h6>Simple Counter {this.props.counter}</h6>
        <button onClick={this.props.increment}>Increment</button>
        <button onClick={this.props.decrement}>Decrement</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { counter: state.counter };
};

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
