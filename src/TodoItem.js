import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.text}
          <button onClick={()=>this.props.deleteTodo(this.props.id)}>-</button>
        </div>
      </div>
    );
  }
}

export default TodoItem;