// Import the react and reactDom libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
// 'function()' is same as '() =>'
const App = () => {
  const buttonText = 'Click me!';

  return (
    <div>
      <label htmlFor="name" className="label">
        Name:
      </label>
      <input id="name" type="text"/>
      <button style={{ backgroundColor: 'red', color: 'white' }}>
        {buttonText}
      </button>
    </div>
  );
};


// Render
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);