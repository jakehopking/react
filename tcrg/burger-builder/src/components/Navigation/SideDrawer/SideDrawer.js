import React, { Fragment } from 'react';
import styles from './SideDrawer.scss';

import Logo from '../../Logo/Logo';
import NavItems from '../../Navigation/NavItems/NavItems';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = (props) => {

  return (
    <Fragment>
      <Backdrop show={props.open} hide={props.closed} />
      <div className={styles.SideDrawer}>
        <Logo />
        <nav>
          <NavItems />
        </nav>
      </div>
    </Fragment>
  )
}

export default sideDrawer;
