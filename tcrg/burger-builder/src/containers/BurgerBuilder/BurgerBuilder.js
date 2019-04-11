import React, { Component, Fragment } from 'react';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
  salad: .5,
  cheese: .5,
  bacon: 1,
  meat: 1.5
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 1,
      bacon: 2,
      cheese: 1,
      meat: 2,
    },
    totalPrice: 3
  }

  addIngredientHandler = (type) => {
    // Count
    const oldCount = this.state.ingredients[type];
    const newCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = newCount;
    // Price
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = this.priceAddition + oldPrice;
    // Update state
    this.setState({ingredients: updatedIngredients, totalPrice: newPrice});
  }

  removeIngredientHandler = (type) => {
    
  }

  render() {
    return (
      <Fragment>
        <Burger ingredients={this.state.ingredients} />
        <BurgerControls 
          ingredientAdded={this.addIngredientHandler}
        />
      </Fragment>
    )
  }
}

export default BurgerBuilder;