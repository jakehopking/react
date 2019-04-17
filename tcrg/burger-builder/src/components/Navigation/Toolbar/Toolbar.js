import React from 'react';
import styles from './Toolbar.scss';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import ToggleMenu from '../../Navigation/SideDrawer/ToggleMenu/ToggleMenu';

const toolbar = (props) => {
  return (
    <header className={styles.Toolbar}>
        <ToggleMenu 
          toggle={props.toggle}
          className={styles.hideMeMobile} 
        />
        <Logo 
          className={styles.hideMeMobile} 
        />
        <nav className={styles.hideMeMobile}>
          <NavItems />
        </nav>
    </header>
  )
}

export default toolbar;
