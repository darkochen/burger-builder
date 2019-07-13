import React, { PureComponent } from 'react';
import Aux from '../hoc/Aux';
import Burger from '../components/Burger/Burger'

class BurgerBuilder extends PureComponent {
  state = {
    ingredients: {
      salad      : 1,
      meat       : 2,
      cheese     : 2,
      bacon      : 1,
    }
  }
  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <div>Burger Controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;