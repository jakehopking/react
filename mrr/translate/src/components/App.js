import React from 'react';
import UserCreate from './UserCreate';

class App extends React.Component {
  state = { language: 'english' };

  onLanguageChange = (language) => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        <div className="">
          Select a language: 
          <i onClick={() => this.onLanguageChange('english')} className="flag uk"></i>
          <i onClick={() => this.onLanguageChange('日本語')} className="flag jp"></i>
        </div>
        {this.state.language}
        <UserCreate />
      </div>
    );
  }
}

export default App;