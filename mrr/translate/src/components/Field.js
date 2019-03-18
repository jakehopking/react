import React from 'react';

class Field extends React.Component {

  render() {
    return (
      <div className="ui field">
        <label htmlFor="name">Name</label>
        <input id="name" type="text" />
      </div>
    );
  }
}

export default Field;