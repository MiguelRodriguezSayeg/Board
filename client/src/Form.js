import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Form extends Component {

  constructor(props) {
    super(props)
    this.state = {
      title:"",
      description:"",
    }
  }
  submit(){

    console.log(this.state);
    fetch('http://localhost:8000/api/store',{
      method:'post',
      body:JSON.stringify(
        this.state
      ),
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',

      }
    }).then(function(response){
      response.json().then(function(resp){
        console.log(resp)
      })
    })
  }

  render(){
    return (
      <div className="App">
        <h1>Formulario</h1>
        <input type="text" name="title" onChange={(item)=>{this.setState({title:item.target.value})}} />
        <input type="text" name="description" onChange={(item)=>{this.setState({description:item.target.value})}} />
        <button onClick={()=>{this.submit()}}> Add Task </button>
      </div>
    );
  }
}

export default Form;