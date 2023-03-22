import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReviewProducts from '../components/ReviewProducts';
import TotalPrice from '../components/TotalPrice';

class ShoppingCart extends Component {
  render() {
    const { removeProduct,
      increaseQuantity,
      decreaseQuantity,
      cart } = this.props;

    if (cart.length === 0) {
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
          cart={ cart }
          removeProduct={ removeProduct }
          increaseQuantity={ increaseQuantity }
          decreaseQuantity={ decreaseQuantity }

        />
        <TotalPrice
          cart={ cart }
        />
      </div>
    );
  }
}
ShoppingCart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape({

  }).isRequired).isRequired,
  removeProduct: PropTypes.func.isRequired,
  increaseQuantity: PropTypes.func.isRequired,
  decreaseQuantity: PropTypes.func.isRequired,

};

export default ShoppingCart;
