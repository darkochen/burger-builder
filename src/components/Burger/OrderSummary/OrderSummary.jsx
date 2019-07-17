import React from 'react';
import PropTypes from 'prop-types';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(igKeys => {
    return (
      <li key={igKeys}>
        <span style={{textTransform: 'captialize'}}>  
          {igKeys} 
        </span> : {props.ingredients[igKeys]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious buger with the following ingredients</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
      <p>Continue to Checkout?</p>
      <Button btnType='success' clicked={props.purchaseContinue}>CONTINUE</Button>
      <Button btnType='danger' clicked={props.purchaseCancel}>CANCEL</Button>
    </Aux>
  );
};

export default orderSummary;