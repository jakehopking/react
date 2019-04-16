import React from 'react';
import styles from './NavItems.scss'
import NavItem from './NavItem/NavItem';

const navItems = (props) => {
  return (
    <ul className={styles.NavItems}>
      <NavItem link="/" active>Burger Builder</NavItem>
      <NavItem link="/">Checkout</NavItem>
      <NavItem link="/">Order History</NavItem>
    </ul>
  )
}

export default navItems;
