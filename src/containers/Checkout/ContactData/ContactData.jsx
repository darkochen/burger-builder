import React, { PureComponent } from 'react';
import Button from '../../../components/UI/Button/Button';
import styles from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends PureComponent {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: '',
    },
    loading: false,
  }

  orderHanlder = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'darko chen',
        address: {
          street: 'fadfasdf',
          zipCode: '10843',
          country: 'Taiwan',
        },
        email: 'darko.chen@gmail.com',
      },
      deliveryMethod: 'fastest',
    };
    axios.post('/orders.json', order)
         .then(response => { 
           this.setState({ loading: false });
         })
         .catch(error => {
           this.setState({ loading: false });
         });
  }

  render() {
    let form = {};
    if (this.state.loading) {
      form= <Spinner />
    } else {
      form = (
        <form>
          <input className={styles['input']} type="text" name="name" placeholder="Your name" />
          <input className={styles['input']} type="email" name="email" placeholder="Your email" />
          <input className={styles['input']} type="text" name="street" placeholder="Your street" />
          <input className={styles['input']} type="text" name="postalCode" placeholder="Your postal code" />
          <Button btnType='success' clicked={this.orderHanlder}>Order Here</Button>
        </form>
      );
    }
    return (
      <div className={styles['contact-data']}>
        <h4>Enter your Contact data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;