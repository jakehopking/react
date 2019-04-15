import React, { Component, Fragment } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
  salad: .5,
  cheese: .5,
  bacon: 1,
  meat: 1.5
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 3,
    canOrder: false,
  }

  canOrder () {
    const ingredients = {
      ...this.state.ingredients,
    };
    let sum = null;
    const arr = Object.keys(ingredients).map((igKey) => {
      console.log(ingredients[igKey]);
      sum += ingredients[igKey];
    });
    // Cound use .reduce((arr, el) => {return arr + el}, 0);
    // https://www.udemy.com/react-the-complete-guide-incl-redux/learn/v4/t/lecture/8109036?start=0
    console.log(sum);
    this.setState({canOrder: sum > 0});
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
    const newPrice = priceAddition + oldPrice;
    // Update state
    this.setState({ingredients: updatedIngredients, totalPrice: newPrice});
    this.canOrder();
  }

  removeIngredientHandler = (type) => {
    // Count
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const newCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = newCount;
    // Price
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = priceDeduction - oldPrice;
    // Update state
    this.setState({ingredients: updatedIngredients, totalPrice: newPrice});
    this.canOrder();
  }

  render() {

    const disabledInfo = {
      ...this.state.ingredients
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }
    console.log(disabledInfo);

    return (
      <Fragment>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls 
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          canOrder={this.state.canOrder}
        />
      </Fragment>
    )
  }
}

export default BurgerBuilder;