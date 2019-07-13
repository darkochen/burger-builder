import React from 'react';
import PropTypes from 'prop-types';
import styles from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = props => {
  const transformedIngredients = Object.keys(props.ingredients).map(igKey => {
    return [...Array(props.ingredients[igKey])].map((_, i) => {
      return <BurgerIngredient key={igKey + i} type={igKey} />
    })  
  })
  return (
    <div className={styles['burger']}>
      <BurgerIngredient type='bread-top'/>
      {transformedIngredients}
      <BurgerIngredient type='bread-bottom'/>
    </div>
  );
};

burger.propTypes = {
  
};

export default burger;