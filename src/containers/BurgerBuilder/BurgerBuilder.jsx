import React, { PureComponent } from 'react';
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const INGREDIENT_PRICE = {
  salad: 0.5,
  meat: 1.5,
  cheese: 0.3,
  bacon: 0.7,
}; 

class BurgerBuilder extends PureComponent {
  state = {
    ingredients: null,
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
    loading: false,
    error: false,
  };

  componentDidMount () {
    axios.get('https://react-my-burger-87bb7.firebaseio.com/ingredients.json')
        .then( response => {
          this.setState({
            ingredients: response.data,
          })
        })
        .catch( error => {
          this.setState({
            error: true,
          })
        });
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredient = {
      ...this.state.ingredients,
    };
    updatedIngredient[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICE[type];
    const newPricce = this.state.totalPrice + priceAddition;
    this.setState({
      ingredients: updatedIngredient, 
      totalPrice: newPricce,
    });
    this.updatePurchaseState(updatedIngredient);
  };

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) return;
    const updatedCount = oldCount - 1;
    const updatedIngredient = {
      ...this.state.ingredients,
    };
    updatedIngredient[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICE[type];
    const newPricce = this.state.totalPrice - priceDeduction;
    this.setState({
      ingredients: updatedIngredient, 
      totalPrice: newPricce,
    });
    this.updatePurchaseState(updatedIngredient);
  };

  updatePurchaseState = (ingredients) => {
    const sum = Object.keys(ingredients).map((igKey => {
      return ingredients[igKey];
    })).reduce((arr, el) => arr + el, 0);
    this.setState({purchasable: sum > 0});
  };

  purchaseHandler = () => {
    this.setState({purchasing: true});
  };

  purchaseCancelHandler = () => {
    this.setState({purchasing: false});
  };

  purchaseContinueHandler = () => {
    this.setState({ loading: true });
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
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
           this.setState({ loading: false, purchasing: false });
         })
         .catch(error => {
           this.setState({ loading: false, purchasing: false });
         });
  };
  
  render() {
    const disableInfo ={...this.state.ingredients};
    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0;
    }
    let orderSummary = null;
    let burger = this.state.error ? <p>Ingredients can't be loaded!</p> : <Spinner />;

    if (this.state.ingredients) {
      burger = (
        <Aux>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls 
            ingredientAdded={this.addIngredientHandler}
            ingredientRemoved={this.removeIngredientHandler}
            disabled={disableInfo}
            purchasable={this.state.purchasable}
            price={this.state.totalPrice}
            order={this.purchaseHandler}
          />
        </Aux>
      );
      orderSummary = <OrderSummary 
        ingredients={this.state.ingredients}
        purchaseContinue={this.purchaseContinueHandler}
        purchaseCancel={this.purchaseCancelHandler}
        price={this.state.totalPrice}
      />
    }

    if (this.state.loading) {
      orderSummary = <Spinner />;
    }

    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);