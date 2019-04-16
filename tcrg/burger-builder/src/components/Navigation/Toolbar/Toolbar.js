import React from 'react';
import styles from './Toolbar.scss';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';

const toolbar = (props) => {
  return (
    <header className={styles.Toolbar}>
      <div>Menu</div>
      <Logo />
      <nav>
        <NavItems />
      </nav>
    </header>
  )
}

export default toolbar;
