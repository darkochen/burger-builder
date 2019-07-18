import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.css';

const button = props => {
  return (
      <button 
        className={[styles['button'], styles[props.btnType]].join(' ')}
        onClick={props.clicked}
      >
        {props.children}
      </button>
  );
};

export default button;