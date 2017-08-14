import React, { Component } from 'react';
import CounterUI from './CounterUI'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = { count: 0 }
    this.decreaseCount = this.decreaseCount.bind(this)
  }

  inceaseCount = () => {
    this.setState({count: this.state.count + 1})
  }
  decreaseCount() {
    this.setState({count: this.state.count - 1})    
  }
  render() {
    return (
      <div className="App">
        <CounterUI 
          countNumber={this.state.count} 
          inceaseCount={this.inceaseCount} 
          decreaseCount={this.decreaseCount} 
        />
      </div>
    );
  }
}

export default App;
