import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

 class App extends Component {

  state = {
    persons: [
      { name: 'PT', age: 28 },
      { name: 'UP', age: 28 }
    ],
    otherState: 'Some random value'
  }

  switchNameHandler = (newName) => {
    console.log('Was clicked.');
    // DON"T DO THIS this.state.persons[0].name = 'Swaroop';
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Priya', age: 28 }
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Swaroop', age: 28 },
        { name: event.target.value, age: 28 }
      ]
    });
  } 

  render() {
    return (
      <div className="App">
        <h1>Hi, React app here.</h1>
        <p>This works fine too.</p>
        <button onClick={() => this.switchNameHandler('Swaroop!!')}>Switch Name</button>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age} 
        click={this.switchNameHandler.bind(this, 'PT')}/>
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        changed={this.nameChangedHandler}> Her hobbies: Working 24/7</Person>
      </div>
    );
  }
    
    // return React.createElement('div', {classNam  e: 'App'}, React.createElement('h1', null, 'Let\'s see if this works.'));
}

export default App;