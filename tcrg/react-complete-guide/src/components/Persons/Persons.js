import React from 'react';
import Person from './Person/Person'

class Persons extends React.Component {
  // static getDerivedStateFromProps(props, state) {
  //   console.log('Persons.js: getDerivedStateFromProps', props);
  //   return state;
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Persons.js: shouldComponentUpdate', nextProps, nextState);
    return true;
  }

  getSnapshotBeforeUpdate(nextProps, nextState) {
    console.log('Persons.js: getSnapshotBeforeUpdate', nextProps, nextState);
    return {message: 'Snapshot!'};
  }

  componentDidUpdate(nextProps, nextState, snapshot) {
    console.log('Persons.js: componentDidUpdate');
    console.log('Persons.js:', snapshot);
  }

  componentWillUnmount() {
    console.log('Persons.js: componentWillUnmount');

  }

  render() {
    return this.props.persons.map((person, index) => {
      return (
        <Person 
          click={() => this.props.clicked(index)} 
          name={person.name} 
          age={person.age} 
          key={person.id}
          changed={(e) => this.props.changed(e, person.id)}>
        </Person>
      );
    });
  }
}

export default Persons;