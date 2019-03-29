import React from 'react';

const ValidationComponent = (props) => {
  const validationLength = 5;

  if (props.input.length >= validationLength) {
    return (
      <div className="ValidationComponent message success">Valid!</div>
    );
  } else {
    return <div className="ValidationComponent message error">Min length: {validationLength} characters.</div>
  }

};

export default ValidationComponent;