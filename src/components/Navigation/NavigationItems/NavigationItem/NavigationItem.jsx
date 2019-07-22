import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavigationItem.css';

const navigationItem = props => {
  return (
   <li className={styles['navigation-item']}>
     <NavLink 
      to={props.link}
      exact={props.exact}
      activeClassName={styles['active']}
     >
      {props.children}
    </NavLink>
   </li>
  );
};

export default navigationItem;