import React, { Fragment } from 'react';
import Button from '../../UI/Button/Button';

class OrderSummary extends React.Component {
  componentDidUpdate() {
    console.log('Order Summary');
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map((igKey, index) => {
      return (
        <li key={index}>
          <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:{' '}
          {this.props.ingredients[igKey]}
        </li>
      );
    });

    return (
      <Fragment>
        <h3>Your order</h3>
        <p>Burger with the following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total price: £{this.props.totalPrice.toFixed(2)}</strong>
        </p>
        <p>Continue to checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancel}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinue}>
          CONTINUE
        </Button>
      </Fragment>
    );
  }
}

export default OrderSummary;
