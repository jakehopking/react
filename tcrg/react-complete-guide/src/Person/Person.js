import React from 'react';
import Radium from 'radium';
import './Person.css';

// class Person extends React.Component {

// }

// export default Person;

const person = (props) => {
  const style = {
    '@media(min-width: 500px)': {
      width: '400px;'
    }
  }
  return (
    <div className="Person" style={style}>
      <p onClick={props.click}>Hello {props.name} and I'm {props.age} years old! {props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default Radium(person);