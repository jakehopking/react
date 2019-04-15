import React from 'react';
import styles from './BuildControl.scss';

const buildControl = (props) => {
  console.log(props.disabled);
  
  return (
    <div className={styles.BuildControl}>
      <div className={styles.Label}>{props.label}</div>
      <button 
        className={styles.Less}
        onClick={props.ingredientAdded}>
          More
        </button>
      <button 
        disabled={props.disabled}
        className={styles.More}
        onClick={props.ingredientRemoved}>
        Less
      </button>
    </div>
  )
};

export default buildControl;
