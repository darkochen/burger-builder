import React from 'react';
import styles from './Input.css';

const Input = props => {
  let inputElement = null;
  const inputClasses = [styles['input-element']]

  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push(styles['invalid']);
  }

  switch (props.elementType) {
    case ('input'):
      inputElement = 
        <input 
          className={inputClasses.join(' ')} 
          {...props.elementConfig} 
          value={props.value} 
          onChange={props.changed}
        />;
      break;
    case ('textarea'):
      inputElement = 
        <textarea 
          className={styles['input-element']} 
          {...props.elementConfig} 
          value={props.value}
          onChange={props.changed}
        />;
      break;
    case ('select'):
      inputElement = 
        <select 
          className={styles['input-element']} 
          value={props.value} 
          onChange={props.changed}
        >
          {props.elementConfig.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>;
      break;
    default:
      inputElement = 
      <input 
        className={styles['input-element']} 
        {...props.elementConfig} 
        value={props.value} 
        onChange={props.changed}
      />;
  }
  return ( 
    <div className={styles['input']}>
      <label className={styles['label']}>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default Input;