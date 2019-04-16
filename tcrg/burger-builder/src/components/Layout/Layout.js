import React, {Fragment} from 'react';
import classes from './Layout.scss';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'; 

const layout = (props) => {
  return (
  <Fragment>
    <Toolbar />
    <SideDrawer />
    <main className={classes.Content}>
      { props.children }
    </main>
  </Fragment>
  )
};

export default layout;