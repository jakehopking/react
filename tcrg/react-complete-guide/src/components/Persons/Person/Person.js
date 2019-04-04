import React, { Fragment } from 'react';
import classes from './Person.css';
// import Aux from '../../../hoc/Aux';

// class Person extends React.Component {

// }

// export default Person;

class Person extends React.Component {
  render() {
    return (
      <Fragment>
        <div className={classes.Person}>
          <p onClick={this.props.click}>Hello {this.props.name} and I'm {this.props.age} years old! {this.props.children}</p>
          <input type="text" onChange={this.props.changed} value={this.props.name} />
        </div>
      </Fragment>
    );
  }
}

export default Person;