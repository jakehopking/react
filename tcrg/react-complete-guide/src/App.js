import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const app = (props) => {
  const [personState, setPersonState] = useState({ 
    persons: [
      { name: 'Jake ', age: 37 },
      { name: 'Mami ', age: 33 },
      { name: 'Kinztachi ', age: 4 }
    ],
    somethingElse: `I'm still here!`
  });

  const switchNameHandler = (newName) => {
    setPersonState({
      persons: [
        { name: 'Jacob ', age: 37 },
        { name: 'Mami ', age: 33 },
        { name: newName, age: 3 }
      ] 
    })
  };

  return (
    <div className="App">
      <h1>I'm Reactive!</h1>
      <button onClick={() => switchNameHandler('New Name!')}>Switch name...</button>
      <Person 
        click={switchNameHandler.bind(this, 'I am the name!')}
        name={personState.persons[0].name} 
        age={personState.persons[0].age}>My hobbies: are something here...</Person>
      <Person 
        name={personState.persons[1].name} 
        age={personState.persons[1].age}>My hobbies: are something here...</Person>
      <Person 
        name={personState.persons[2].name} 
        age={personState.persons[2].age}>My hobbies: are something here...</Person>
    </div>
  );
}

export default app;
