import React from 'react';
import styles from './Toolbar.scss';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';

const toolbar = (props) => {
  return (
    <header className={styles.Toolbar}>
      <div className={[styles.Toolbar, styles.hideMeMobile].join(' ')}>
        <div>Menu</div>
        <Logo />
        <nav>
          <NavItems />
        </nav>
      </div>
    </header>
  )
}

export default toolbar;
