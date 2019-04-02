import React from 'react';
import classes from './App.css';
import Person from './Person/Person'
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

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
              <ErrorBoundary key={person.id}>
                <Person 
                  click={() => this.deletePersonHandler(index)} 
                  name={person.name} 
                  age={person.age} 
                  changed={(e) => this.nameChangedHandler(e, person.id)}>
                </Person>
              </ErrorBoundary>
            );
          })}
        </div>
      );
    }
  };

  render() {
    
    let assignedClasses = [];
    let buttonClass = '';

    if (this.state.persons.length <= 2) {
      assignedClasses.push( classes.red );
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push( classes.uppercase );
    }
    if (this.state.showPersonsList) {
      buttonClass = classes.red;
    }
    
    const random = Math.random();

    if (random > 0.7) {
      throw new Error('Something went wrong');
    }

    return (
      <div className={classes.App}>
        <h1 className={assignedClasses.join( ' ' )}>I'm Reactive!</h1>
        <button className={buttonClass}
          onClick={this.togglePersonsHandler}>
          Toggle persons
        </button>
        {this.personListFunction()}
      </div>
    );
  }
}

export default App;
