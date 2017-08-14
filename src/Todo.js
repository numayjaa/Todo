import React, { Component } from 'react'
import TodoItem from './TodoItem'

class Todo extends Component {
  constructor() {
    super()
    this.state = { 
        todos: [
          {
            id: 1,
            text: "a"
          },
          {
            id: 2,
            text: "b"
          }
        ]
    }
  }

  showTodo() {
    let todo = this.state.todos
    let wrap = []
    for (let index = 0; index < todo.length; index++) {
      wrap.push(<div>{todo[index].text}<button>-</button></div>)
    } 
    return wrap
  }

  addTodo(e) {
    e.preventDefault()
    // console.log("a")
    let todoText = e.target.text.value
    let newTodo = {id: this.state.todos[this.state.todos.length - 1].id + 1,text: todoText}
    this.state.todos.push(newTodo)
    //console.log(this.state.todos)
    this.setState({todos: this.state.todos}) 
    e.target.text.value = ""
  }

  deleteTodo(id) {
    console.log(id)
    const index = this.state.todos.findIndex(todo=>todo.id===id)
    this.state.todos.splice(index,1)
    console.log(this.state.todos)
    this.setState({todos: this.state.todos})
  }

  render() {
    return (
      <div>
        {/* { this.showTodo() } */}
        <form onSubmit={ this.addTodo.bind(this) }>
          <input type="text" name="text" />
          <input type="submit" value="Submit" />
        </form>
        { this.state.todos.map((todo,index) => (
          <TodoItem 
            key={todo.id} 
            text={todo.text} 
            id={todo.id} 
            deleteTodo={this.deleteTodo.bind(this)} 
          />
        ))}
      </div>
    );
  }
}

export default Todo;