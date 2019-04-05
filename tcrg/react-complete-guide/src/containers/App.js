import React from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/WithClass';
import Aux from '../hoc/Aux';
// import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('App.js: Constructor');
  }

  state = { 
    persons: [
      { id: 0, name: 'Jake', age: 37 },
      { id: 1, name: 'Mami', age: 33 },
      { id: 2, name: 'Kinztachi', age: 4 }
    ],
    somethingElse: `I'm still here!`,
    showPersonsList: false,
    showCockpit: true,
    changeCounter: 0
  };

  static getDerivedStateFromProps(props, state) {
    console.log('App.js: getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('App.js: componentDidMount');
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    console.log('App.js: shouldComponentUpdate');
    return true;
  }
  
  componentDidUpdate() {
    console.log('App.js: componentDidUpdate');
  }

  nameChangedHandler = (e, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    
    // const selectedPerson = Object.assign({}, this.state.persons[personIndex]); // Old approach
    const selectedPerson = {
      ...this.state.persons[personIndex]
    }; // Modern approach

    selectedPerson.name = e.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = selectedPerson;

    // When updating state which depends on old state, this pattern with prevState is really important
    this.setState((prevState, props) => { 
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      }
    });
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
    console.log('Persons hidden:', this.state.showPersonsList);
  };

  personListFunction = () => {
    if (this.state.showPersonsList) {
      return (
        <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler} />
      );
    }
  };

  cockpitToggle = () => {
    const currentState = this.state.showCockpit;
    this.setState({ showCockpit: !currentState });
    console.log('Cockpit hidden:', this.state.showCockpit);
  };

  cockpitContainer = () => {
    if (this.state.showCockpit) {
      return (
        <div>
          <Cockpit
            title={this.props.appTitle}
            showPersonsList={this.state.showPersonsList} 
            personsLength={this.state.persons.length}
            clicked={this.togglePersonsHandler} />
          {this.personListFunction()}
        </div>
      )
    } else {
      return null;
    }
  }

  render() {    
    // const random = Math.random();
    // if (random > 0.7) {
    //   throw new Error('Something went wrong');
    // }
    console.log('App.js: Render');
    return (
      <Aux>
        <button onClick={() => this.cockpitToggle()}>Toggle cockpit</button>
        {this.cockpitContainer()}
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
