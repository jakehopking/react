import React from 'react';
import LanguageContext from '../context/LanguageContext';

class LanguageSelector extends React.Component {
  static contextType = LanguageContext;
  render() {
    console.log(this.context);
    
    return (
      <div className="">
        Select a language: 
        <i onClick={() => this.context.onLanguageChange('english')} className="flag uk"></i>
        <i onClick={() => this.context.onLanguageChange('日本語')} className="flag jp"></i>
      </div>
    );
  }
}

export default LanguageSelector;