import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, React app here.</h1>
        <p>This works fine too.</p>
        <Person />
        <Person />
        <Person />
        <Person />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Let\'s see if this works.'));
  }
}

export default App;
