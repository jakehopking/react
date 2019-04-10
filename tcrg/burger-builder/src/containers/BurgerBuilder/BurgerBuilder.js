import React, { Component, Fragment } from 'react';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      bacon: 1,
      cheese: 2,
      meat: 2,
      salad: 2
    }
  }

  render() {
    return (
      <Fragment>
        <Burger />
        <div className="burger-controls">Burger builder controls</div>
      </Fragment>
    )
  }
}

export default BurgerBuilder;