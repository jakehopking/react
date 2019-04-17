import React, { Fragment } from 'react';
import styles from './SideDrawer.scss';

import Logo from '../../Logo/Logo';
import NavItems from '../../Navigation/NavItems/NavItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import ToggleMenu from './ToggleMenu/ToggleMenu';

const sideDrawer = (props) => {
  let sideDrawStyles = [styles.SideDrawer, styles.Close];
  if (props.open) {
    sideDrawStyles = [styles.SideDrawer, styles.Open];
  }
  return (
    <Fragment>
      <Backdrop show={props.open} hide={props.closed} />
      <div className={sideDrawStyles.join(' ')}>
        <ToggleMenu 
          toggle={props.toggle}
          className={styles.hideMeMobile}>
        </ToggleMenu>
        <Logo />
        <nav>
          <NavItems />
        </nav>
      </div>
    </Fragment>
  )
}

export default sideDrawer;
