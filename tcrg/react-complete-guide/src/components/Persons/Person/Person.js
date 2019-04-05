import React from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/WithClass';

// class Person extends React.Component {

// }

// export default Person;

class Person extends React.Component {
  constructor(props) {
    super(props);
    this.inputTarget = React.createRef();
  }

  componentDidMount() {
    // this.inputTarget.focus();
    this.inputTarget.current.focus();
  }

  render() {
    return (
      <Aux>
        <p onClick={this.props.click}>
          Hello {this.props.name} and I'm {this.props.age} years old! {this.props.children}
        </p>
        <input 
          type="text" 
          // ref={(inputEl) => {this.inputTarget = inputEl}}
          ref={this.inputTarget}
          onChange={this.props.changed} 
          value={this.props.name} />
      </Aux>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);