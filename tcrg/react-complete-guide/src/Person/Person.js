import React from 'react';
import './Person.css';

// class Person extends React.Component {

// }

// export default Person;

const person = (props) => {
  return (
    <div className="Person">
      <p onClick={props.click}>Hello {props.name} and I'm {props.age} years old! {props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;