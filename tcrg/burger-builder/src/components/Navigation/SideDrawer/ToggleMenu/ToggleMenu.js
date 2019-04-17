import React from 'react';
import styles from './ToggleMenu.scss';

const toggleMenu = (props) => {
  return (
    <div 
      onClick={props.toggle}
      className={styles.ToggleMenu}>
      <div>
        {props.children}
      </div>
    </div>
  )
}

export default toggleMenu;
