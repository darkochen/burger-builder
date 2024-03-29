import React, { PureComponent} from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.css';
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends PureComponent {
  render () {
    return (
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div 
          className={styles['modal']} 
          style={{
            transform: this.props.show ? 'translateY(0)': 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0',
          }}
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default Modal;