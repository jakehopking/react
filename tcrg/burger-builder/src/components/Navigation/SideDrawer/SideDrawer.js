import React from 'react';
import styles from './SideDrawer.scss';

import Logo from '../../Logo/Logo';
import NavItems from '../../Navigation/NavItems/NavItems';

const sideDrawer = (props) => {



  return (
    <div className={styles.SideDrawer}>
      <Logo />
      <nav>
        <NavItems />
      </nav>
    </div>
  )
}

export default sideDrawer;
