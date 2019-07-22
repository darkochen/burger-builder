import React from 'react';
import Burger from '../../Burger/Burger';
import styles from './CheckoutSummary.css';
import Button from '../../UI/Button/Button';

const CheckoutSummary = props => {
  return (
    <div className={styles['checkout-summary']}>
      <h1>We hope this tastes good</h1>
      <div style={{ width: '100%', margin: 'auto' }}>
        <Burger ingredients={props.ingredients}/>
      </div>
      <Button 
        btnType="danger"
        clicked={props.checkoutCancelled}
      >
        CANCEL
      </Button>
      <Button 
        btnType="success"
        clicked={props.checkoutContinued}
      >
        CONTINUE
      </Button>
    </div>
  );
};


export default CheckoutSummary;