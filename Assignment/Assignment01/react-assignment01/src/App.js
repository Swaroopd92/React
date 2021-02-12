import React, { Component } from 'react';
import logo from './logo.svg';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import './App.css';

class App extends Component {
  state = {
    user: [
      {firstname: 'Swaroop', username: 'santoryu'}
    ]
  };

  updateStateHandler = (event) => {
    this.setState({
      user: [
        {firstname: event.target.value, username: 'santoryu'}
      ]
    });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      margin: '3px',
      border: '1px solid #eee',
      boxShadow: '0 2px 3px #ccc',
      padding: '8px'     
    };

    return (
      <div className="App">
        <h1>Assignment 01</h1>
        <UserInput 
        change={this.updateStateHandler} 
        firstname={this.state.user[0].firstname}/>
        <UserOutput 
        style={style} 
        firstname={this.state.user[0].firstname} 
        username={this.state.user[0].username}/>
      </div>
    );
  }
}

export default App;
