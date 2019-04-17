import React, { Fragment } from 'react';
import styles from './Model.scss';

import Backdrop from '../Backdrop/Backdrop';

class Modal extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
  }

  componentDidUpdate() {
    console.log('Modal updated');
  }

  render() {
    return (
      <Fragment>
        <Backdrop show={this.props.show} hide={this.props.hide} />
        <div 
          className={styles.Modal}
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0',
          }}
          >
          {this.props.children}
        </div>
      </Fragment>
    )
  }
}

export default Modal;
