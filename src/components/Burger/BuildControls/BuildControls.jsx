import React from 'react';
import styles from './BuildControls.css';
import BuildControl from '../BuildControl/BuildControl';

const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Meat', type: 'meat'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'cheese', type: 'cheese'},
]

const buildControls = (props) => {
  
  return (
    <div className={styles['build-controls']}> 
      <p> Current Price: <strong>{props.price.toFixed(2)}</strong></p>
      {controls.map( ctrl => 
        <BuildControl
          key={ctrl.label}
          label={ctrl.label} 
          added={() => props.ingredientAdded(ctrl.type)}
          removed={() => props.ingredientRemoved(ctrl.type)}
          disabled={props.disabled[ctrl.type]}
        />
      )}
      <button className={styles['order-button']} disabled={!props.purchasable}>Order Now</button>
    </div>
  );
};

export default buildControls;