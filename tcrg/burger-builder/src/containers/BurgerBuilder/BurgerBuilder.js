import React, { Component, Fragment } from 'react';
import axios from '../../axiosOrders';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import Modal from '../../components/UI/Model/Model';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.5,
  bacon: 1,
  meat: 1.5,
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
    purchasing: false,
    loading: false,
  };

  canOrder(ingredients) {
    let sum = null;
    Object.keys(ingredients).map(igKey => (sum += ingredients[igKey]));
    // Cound use .reduce((arr, el) => {return arr + el}, 0);
    // https://www.udemy.com/react-the-complete-guide-incl-redux/learn/v4/t/lecture/8109036?start=0
    console.log(sum);
    this.setState({ canOrder: sum > 0 });
  }

  addIngredientHandler = type => {
    // Count
    const oldCount = this.state.ingredients[type];
    const newCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = newCount;
    // Price
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    // Update state
    this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
    this.canOrder(updatedIngredients);
  };

  removeIngredientHandler = type => {
    // Count
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const newCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = newCount;
    // Price
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    // Update state
    this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
    this.canOrder(updatedIngredients);
  };

  purchaseHandler = () => {
    this.setState({ purchasing: !this.state.purchasing });
  };

  purchaseContinueHandler = () => {
    // alert('You continued!');
    this.setState({loading: true});
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: 'Jake Hopking',
        address: {
          number: '54A',
          street: 'Coniston Road',
          town: 'Muswell Hill',
          county: 'London',
          postcode: 'N10 2BN',
          country: 'UK'
        },
        email: 'jake@hopking.io',
        deliveryMethod: 'Lightspeed'
      }
    };
    axios.post('orders.json', order)
      .then(response => {
        this.setState({
          loading: false,
          purchasing: false,
        });
        console.log(response);
      })
      .catch(error => {
        this.setState({
          loading: false,
          purchasing: false,
        });
        console.log(error);
      })
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients,
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    let orderSummary = <OrderSummary
      purchaseContinue={this.purchaseContinueHandler}
      purchaseCancel={this.purchaseHandler}
      ingredients={this.state.ingredients}
      totalPrice={this.state.totalPrice}
    />;
    if (this.state.loading) {
      orderSummary = <Spinner />
    }
    console.log(disabledInfo);

    return (
      <Fragment>
        <Modal show={this.state.purchasing} hide={this.purchaseHandler}>
          {orderSummary}
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          canOrder={this.state.canOrder}
          ordered={this.purchaseHandler}
        />
      </Fragment>
    );
  }
}

export default BurgerBuilder;
