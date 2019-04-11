import React from 'react';
import styles from './BuildControl.scss';

const buildControl = (props) => {
  return (
    <div className={styles.BuildControl}>
      <div className={styles.Label}>{props.label}</div>
      <button 
        className={styles.Less}
        onClick={props.ingredientAdded}>
          More
        </button>
      <button 
        className={styles.More}>
        Less
      </button>
    </div>
  )
};

export default buildControl;
