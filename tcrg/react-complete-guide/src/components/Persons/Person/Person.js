import React from 'react';
import classes from './Person.css';

// class Person extends React.Component {

// }

// export default Person;

class Person extends React.Component {
  render() {
    return (
      <div className={classes.Person}>
        <p onClick={this.props.click}>Hello {this.props.name} and I'm {this.props.age} years old! {this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name} />
      </div>
    );
  }
}

export default Person;