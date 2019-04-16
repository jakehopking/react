import React from 'react';
import styles from './Logo.scss';
import burgerLogo from '../../assets/images/burger-logo.png';

const logo = (props) => {
  return (
    <div className={styles.Logo}>
      <img src={burgerLogo} alt="Burger Builder logo"/>
    </div>
  )
}

export default logo
