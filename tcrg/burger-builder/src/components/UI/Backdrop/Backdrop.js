import React from 'react';
import styles from './Backdrop.scss';

const backdrop = props =>
  props.show ? <div className={styles.Backdrop} onClick={props.hide} /> : null;

export default backdrop;
