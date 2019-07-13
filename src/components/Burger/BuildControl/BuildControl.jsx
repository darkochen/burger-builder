import React from 'react';
import styles from './BuildControl.css';

const buildControl = (props) => {
  return (
    <div className={styles['buildControl']}>
      <div className={styles['label']}>{props.label}</div>
      <button className={styles['less']}>Less</button>
      <button className={styles['more']} onClick={props.added}>More</button>
    </div>
  );
};

export default buildControl;