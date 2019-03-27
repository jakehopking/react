import React from 'react';

// class Person extends React.Component {

// }

// export default Person;

const person = (props) => {
  return (
    <div>
      <p onClick={props.click}>Hello {props.name} and I'm {props.age} years old! {props.children}</p>
    </div>
  );
};

export default person;