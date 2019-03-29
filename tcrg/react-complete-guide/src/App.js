import React from 'react';
import './App.css';
import Person from './Person/Person'

class App extends React.Component {
  state = { 
    persons: [
      { id: 0, name: 'Jake', age: 37 },
      { id: 1, name: 'Mami', age: 33 },
      { id: 2, name: 'Kinztachi', age: 4 }
    ],
    somethingElse: `I'm still here!`,
    showPersonsList: false
  };

  nameChangedHandler = (e, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    
    // const selectedPerson = Object.assign({}, this.state.persons[personIndex]); // Old approach
    const selectedPerson = {
      ...this.state.persons[personIndex]
    }; // Modern approach

    selectedPerson.name = e.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = selectedPerson;

    this.setState({ persons: persons });
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.splice(); // Old approach
    const persons = [...this.state.persons]; // Modern approach
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const currentState = this.state.showPersonsList;
    this.setState({ showPersonsList: !currentState });
    console.log('Hidden:', this.state.showPersonsList);
  };

  personListFunction = () => {
    if (this.state.showPersonsList) {
      return (
        <div className="personList">
          {this.state.persons.map((person, index) => {
            return (
              <Person 
                click={() => this.deletePersonHandler(index)} 
                name={person.name} 
                age={person.age} 
                key={person.id}
                changed={(e) => this.nameChangedHandler(e, person.id)}>
              </Person>
            );
          })}
        </div>
      );
    }
  };

  render() {
    const style = {
      backgroundColor: 'blue',
      color: 'white',
      padding: '10px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>I'm Reactive!</h1>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>
          Toggle persons
        </button>
        {this.personListFunction()}
      </div>
    );
  }
}

export default App;
