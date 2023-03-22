import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CheckoutCard from './CheckoutCard';

class ReviewProducts extends Component {
  render() {
    const { cart, removeProduct, increaseQuantity, decreaseQuantity,

    } = this.props;
    return (
      <div>
        {
          cart.map((product) => (
            <CheckoutCard
              key={ product.id }
              product={ product }
              removeProduct={ removeProduct }
              increaseQuantity={ increaseQuantity }
              decreaseQuantity={ decreaseQuantity }
            />
          ))
        }
      </div>
    );
  }
}

ReviewProducts.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({

    }).isRequired,
  ).isRequired,
  decreaseQuantity: PropTypes.func.isRequired,
  increaseQuantity: PropTypes.func.isRequired,
  removeProduct: PropTypes.func.isRequired,
};

export default ReviewProducts;
