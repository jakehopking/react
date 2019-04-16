import React from 'react';
import styles from './Button.scss';

const button = (props) => (
  <button
    onClick={props.clicked}
    className={[styles.Button, styles[props.btnType]].join(' ')}
  >
    {props.children}
  </button>
)

export default button;
