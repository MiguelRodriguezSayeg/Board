import React, { Component } from 'react';
import { unmountComponentAtNode } from 'react-dom';

import './App.css';

class Lane extends Component {
  update(data){
    return (function(){
	    fetch('http://localhost:8000/api/update'+'/'+data.id,{
	      method:'PUT',
	      body:JSON.stringify(
	        {data}
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
    })
  }
  render () {
    return (
    <div>
      <div className="Lane flex-grow-1">
        { this.props.tasks.map( task => <span><div>{task.title}</div> <div>{ task.description }</div><button onClick={this.update(task)} value={task.id}>Move!</button></span>) }
      </div>
    </div>
    );
  }
}

export default Lane;