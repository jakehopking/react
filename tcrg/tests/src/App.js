import React, { Component } from 'react';
import ValidationComponent from './component/ValidationComponent';
import CharCount from './component/CharCount';
import './App.css';

class App extends Component {
  state = {
    input: '',
    charArrar: []
  }

  setInput = (event) => {
    // console.log(event.target.value)
    this.setState({ input: event.target.value });
  };

  deleteChar = (index) => {
    const text = this.state.input.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({ input: updatedText });
  }


  charListing = (input) => {
    const splitChars = input.split('');
    return (
      splitChars.map((char, index) => <CharCount 
        clicked={() => this.deleteChar(index)}
        input={char} 
        key={index} />)
    );
  };


  render() {
    return (
      <div className="App">
        <div className="solution">
          <input onChange={(event) => this.setInput(event)} type="text"></input>
          <p className="inputOutput">{this.state.input}</p>
          <ValidationComponent 
            input={this.state.input} />
          {this.charListing(this.state.input)}
        </div>
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
      </div>
    );
  }
}

export default App;
