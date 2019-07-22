import React from 'react';
import styles from './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => {
  return (
    <ul className={styles['navigation-items']}>
      <NavigationItem link="/" exact>Burger Builder</NavigationItem>
      <NavigationItem link="/orders">Orders</NavigationItem>
    </ul>
  );
};

export default navigationItems;