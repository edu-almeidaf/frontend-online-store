import React, { Component } from 'react';
import ReviewProducts from '../components/ReviewProducts';
import TotalPrice from '../components/TotalPrice';

class ShoppingCart extends Component {
  state = {
    awaiting: true,
    local: [],
  };

  componentDidMount() {
    this.getLocalStorage();
  }

  getLocalStorage = () => {
    const local = JSON.parse(localStorage.getItem('Carrinho'));
    if (local.length > 0) {
      this.setState({
        local,
        awaiting: false,
      });
    }
  };

  render() {
    const { awaiting, local } = this.state;
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
        <ReviewProducts
          local={ local }
        />
        <TotalPrice
          local={ local }
        />
      </div>
    );
  }
}

export default ShoppingCart;
