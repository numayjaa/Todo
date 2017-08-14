import React, { Component } from 'react';

class CounterUI extends Component {
  render() {
    return (
      <div>
        <p>Counter..</p>
        <button onClick={this.props.decreaseCount}>-</button>
          {this.props.countNumber}
        <button onClick={this.props.inceaseCount}>+</button>
      </div>
    );
  }
}

export default CounterUI;