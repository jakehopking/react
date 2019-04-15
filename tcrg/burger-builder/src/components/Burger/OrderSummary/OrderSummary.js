import React, { Fragment } from 'react';

const orderSummary = (props) => {

  const ingredientSummary = Object.keys(props.ingredients).map((igKey, index) => {
    return (
      <li key={index}>
        <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
      </li>
      )
  });

  return (
    <Fragment>
      <h3>Your order</h3>
      <p>Burger with the following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Continue to checkout?</p>
    </Fragment>
  )
}

export default orderSummary;
