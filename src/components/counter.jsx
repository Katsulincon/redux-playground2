import React, { Component } from 'react';
import { connect } from 'react-redux';

// data flows in Redux (dispatch(action) -> reducer -> new state -> re-render)

class Counter extends Component {

  increment = () => {
    // dispatch(someAction)
    // connect injects the dispatch function as a prop

    // Dispatching Actions!!!
    this.props.dispatch({ type: "INCREMENT" });
  }

  decrement = () => {
    // Dispatching Actions!!!
    this.props.dispatch({ type: "DECREMENT" });
  }

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <span>{this.props.count}</span>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state.count
});


export default connect(mapStateToProps)(Counter);
