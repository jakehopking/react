import React from 'react';
import styles from './NavItem.scss'

const navItem = (props) => {
  return (
    <li className={styles.NavItem}>
      <a 
        href={props.link}
        className={props.active ? styles.active : null}>
          {props.children}
        </a>
    </li>
  )
}

export default navItem;
