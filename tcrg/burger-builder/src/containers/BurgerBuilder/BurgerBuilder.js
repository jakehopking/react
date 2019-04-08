import React, { Component, Fragment } from 'react';

class BurgerBuilder extends Component {
  // constructor() {
  //   super()
  // }

  render() {
    return (
      <Fragment>
        <div className="burger">Burger</div>
        <div className="burger-controls">Burger builder controls</div>
      </Fragment>
    )
  }
}

export default BurgerBuilder;