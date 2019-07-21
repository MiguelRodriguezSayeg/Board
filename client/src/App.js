import React, { Component } from 'react';
import Lane from './Lane.js';
import Form from './Form.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      tasks: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:8000/api/tasks').then( r => r.json() ).then(
      r => {
        // r.data.tasks
        this.setState({
          tasks: r.data.tasks
        });
      }
    );
  }

  render(){
    return (
      <div className="App">
      	<h1>Hay { this.state.tasks.length } tareas</h1>
        <div className="d-flex">
          <Lane tasks={ this.state.tasks.filter( task => task.status === 1 ) } />
          <Lane tasks={ this.state.tasks.filter( task => task.status === 2 ) } />
          <Lane tasks={ this.state.tasks.filter( task => task.status === 3 ) } />
        </div>
        <Form />
      </div>
    );
  }
}

export default App;