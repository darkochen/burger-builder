import React from 'react';
import PropTypes from 'prop-types';
import styles from './Toolbar.css';
import Logo from '../../Logo/Logo';

const toolbar = props => {
  return (
    <header className={styles['toolbar']}>
      <div>MENU</div>
      <Logo />
      <nav>...</nav>
    </header>
  );
};

export default toolbar;