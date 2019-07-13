import React, { PureComponent } from 'react';
import Aux from '../hoc/Aux';
import Burger from '../components/Burger/Burger';
import BuildControls from '../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICE = {
  salad: 0.5,
  meat: 1.5,
  cheese: 0.3,
  bacon: 0.7,
}; 

class BurgerBuilder extends PureComponent {
  state = {
    ingredients: {
      salad      : 0,
      meat       : 0,
      cheese     : 0,
      bacon      : 0,
    },
    totalPrice: 4,
  };

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
  };

  removeIngredientHandler = (type) => {

  };
  
  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls 
          ingredientAdded={this.addIngredientHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;