import React, { Component } from 'react';

class ShoppingCart extends Component {
  state = {
    awaiting: true,
  };

  render() {
    const { awaiting } = this.state;
    if (awaiting) {
      return (
        <p
          data-testid="shopping-cart-empty-message"
        >
          Seu carrinho está vazio
        </p>
      );
    }
    return (
      <div>
        carrinho
      </div>
    );
  }
}

export default ShoppingCart;
