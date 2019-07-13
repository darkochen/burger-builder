import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './BurgerIngredient.css';

class BurgerIngredient extends Component {
  render () {
    let ingredient = null;
    switch (this.props.type){
      case 'bread-bottom':
        ingredient = <div className={styles['bread-bottom']}></div>;
        break;
      case 'bread-top':
        ingredient = <div className={styles['bread-top']}></div>;
        break;
      case 'salad':
        ingredient = <div className={styles['salad']}></div>;
        break;
      case 'cheese':
        ingredient = <div className={styles['cheese']}></div>;
        break;
      case 'bacon':
        ingredient = <div className={styles['bacon']}></div>;
        break;
      default:
        ingredient = null;
        break;
    }
    return ingredient;
  }
};

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired,
};

export default BurgerIngredient;