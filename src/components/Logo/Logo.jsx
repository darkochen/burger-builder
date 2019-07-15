import React from 'react';
import PropTypes from 'prop-types';
import burgerLogo from '../../assets/images/burger-logo.png';
import styles from './Logo.css';
const logo = props => {
  return (
    <div className={styles['logo']}>
      <img src={burgerLogo} />
    </div>
  );
};

export default logo;