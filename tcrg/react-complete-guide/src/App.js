import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends React.Component {
  state = { 
    persons: [
      { name: 'Jake ', age: 37 },
      { name: 'Mami ', age: 33 },
      { name: 'Kinztachi ', age: 4 }
    ],
    somethingElse: `I'm still here!`
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: 'Jacob ', age: 37 },
        { name: 'Mami ', age: 33 },
        { name: newName, age: 3 }
      ] 
    })
  };

  render() {
    return (
      <div className="App">
        <h1>I'm Reactive!</h1>
        <button onClick={() => this.switchNameHandler('New Name!')}>Switch name...</button>
        <Person 
          click={this.switchNameHandler.bind(this, 'I am the name!')}
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}>My hobbies: are something here...</Person>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}>My hobbies: are something here...</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}>My hobbies: are something here...</Person>
      </div>
    );
  }
}

export default App;
