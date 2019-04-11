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
      {controls.map((ctrl, index) => {
        return <BuildControl 
          label={ctrl.label} 
          type={ctrl.type} 
          key={index} 
          ingredientAdded={props.ingredientAdded}
        />
      })}
    </div>
  )
}

export default buildControls;
