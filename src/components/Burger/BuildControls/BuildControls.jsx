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
      {controls.map( ctrl => 
        <BuildControl
          key={ctrl.label}
          label={ctrl.label} 
          added={() => props.ingredientAdded(ctrl.type)}
        />
      )}
    </div>
  );
};

export default buildControls;