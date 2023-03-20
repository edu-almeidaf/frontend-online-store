import React, { Component } from 'react';
import ReviewProducts from '../components/ReviewProducts';
import TotalPrice from '../components/TotalPrice';

class ShoppingCart extends Component {
  state = {
    awaiting: true,
    cartArray: [],
  };

  componentDidMount() {
    this.getLocalStorage();
  }

  getLocalStorage = () => {
    const cartArray = JSON.parse(localStorage.getItem('Cart'));
    if (cartArray.length > 0) {
      this.setState({
        cartArray,
        awaiting: false,
      });
    }
  };

  render() {
    const { awaiting, cartArray } = this.state;
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
          cartArray={ cartArray }
        />
        <TotalPrice
          cartArray={ cartArray }
        />
      </div>
    );
  }
}

export default ShoppingCart;
