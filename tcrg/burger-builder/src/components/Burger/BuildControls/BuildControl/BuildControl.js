import React from 'react';
import styles from './BuildControl.scss';

const buildControl = (props) => {
  return (
    <div className={styles.BuildControl}>
      <div className={styles.BuildControl}>{props.label}</div>
      <button className={styles.Less}>More</button>
      <button className={styles.More}>Less</button>
    </div>
  )
};

export default buildControl;
