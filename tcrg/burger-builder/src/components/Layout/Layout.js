import React, {Fragment} from 'react';
import classes from './Layout.scss';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'; 

class Layout extends React.Component {

  state = {
    showSideDrawer: true
  }

  sideDrawToggleHandler = () => {
    console.log('Backdrop show: ', this.state.showSideDrawer);
    this.setState({showSideDrawer: false});
  }
  
  render() {
    return (
    <Fragment>
      <Toolbar />
      <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawToggleHandler} />
      <main className={classes.Content}>
        { this.props.children }
      </main>
    </Fragment>
    )
  }
};

export default Layout;