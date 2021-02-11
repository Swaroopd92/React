import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

 const app = props => {

  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'PT', age: 28 },
      { name: 'UP', age: 28 }
    ],
  });

  const [otherState, setOtherState] = useState('some value');

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    // console.log('Was clicked.');
    // DON"T DO THIS this.state.persons[0].name = 'Swaroop';
    setPersonsState({
      persons: [
        { name: 'Swaroop', age: 28 },
        { name: 'Priya', age: 28 }
      ]
    });
  }

    return (
      <div className="App">
        <h1>Hi, React app here.</h1>
        <p>This works fine too.</p>
        <button onClick={switchNameHandler}>Switch_Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}> Her hobbies: Working 24/7</Person>
      </div>
    );
    // return React.createElement('div', {classNam  e: 'App'}, React.createElement('h1', null, 'Let\'s see if this works.'));
}

export default app;