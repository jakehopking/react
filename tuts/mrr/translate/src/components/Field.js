import React from 'react';
import LanguageContext from '../context/LanguageContext'

class Field extends React.Component {
  static contextType = LanguageContext;

  render() {
    const text = this.context.language === 'english' ? 'Name' : '名前';

    return (
      <div className="ui field">
        <label htmlFor="name">{text}</label>
        <input id="name" type="text" />
      </div>
    );
  }
}

export default Field;