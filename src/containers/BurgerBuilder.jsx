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
    purchasable: false,
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
  }
  
  render() {
    const disableInfo ={...this.state.ingredients};
    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0;
    }
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls 
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disableInfo}
          purchasable={this.state.purchasable}
          price={this.state.totalPrice}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;