import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import styles from './BuildControls.scss';

const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Meat', type: 'meat'}
];

const buildControls = (props) => {

  return (
    <div className={styles.BuildControls}>
      <p>Current price: <strong>£{props.price.toFixed(2)}</strong></p>
      {controls.map((ctrl, index) => {
        return <BuildControl 
          label={ctrl.label} 
          key={index} 
          ingredientAdded={() => props.ingredientAdded(ctrl.type)}
          ingredientRemoved={() => props.ingredientRemoved(ctrl.type)}
          disabled={props.disabled[ctrl.type]}
        />
      })}
      <button 
        className={styles.OrderButton}
        disabled={!props.canOrder}
      >
      ORDER NOW!!</button>
    </div>
  )
}

export default buildControls;
