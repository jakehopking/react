import React from 'react';
import LanguageContext from '../context/LanguageContext'
import ColourContext from '../context/ColourContext'

class Button extends React.Component {
  // static contextType = LanguageContext;
  renderSubmit(language) {
    return language === 'english' ? 'Submit' : 'センド';
  };

  renderButton(colour) {
    return (
      <button className={`ui button ${colour}`}>
        {/* {text} */}
        <LanguageContext.Consumer>
          {({ language }) => this.renderSubmit(language)}
        </LanguageContext.Consumer>
      </button>
    )
  };

  render() {
    // console.log(this.context);
    // const text = this.context === 'english' ? 'Submit' : 'センド';
    return (
      <ColourContext.Consumer>
        {(colour) => this.renderButton(colour)}
      </ColourContext.Consumer>
    );
  }
}

export default Button;
