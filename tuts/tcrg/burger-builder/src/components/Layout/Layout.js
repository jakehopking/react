import React, { Fragment } from 'react';
import classes from './Layout.scss';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends React.Component {
  state = {
    showSideDrawer: false,
  };

  sideDrawToggleHandler = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
    console.log('Backdrop show: ', !this.state.showSideDrawer);
  };

  render() {
    return (
      <Fragment>
        <Toolbar toggle={this.sideDrawToggleHandler} open={this.sideDrawToggleHandler} />
        <SideDrawer
          toggle={this.sideDrawToggleHandler}
          open={this.state.showSideDrawer}
          closed={this.sideDrawToggleHandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Fragment>
    );
  }
}

export default Layout;
