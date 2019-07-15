import React from 'react';
import PropTypes from 'prop-types';
import styles from './Backdrop.css';

const backdrop = props => props.show ? <div className={styles['backdrop']} onClick={props.clicked}/> : null

export default backdrop;