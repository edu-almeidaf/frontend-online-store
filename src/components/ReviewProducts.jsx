import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CheckoutCard from './CheckoutCard';

class ReviewProducts extends Component {
  render() {
    const { cartArray } = this.props;
    return (
      <div>
        {
          cartArray.map((product) => (
            <CheckoutCard
              key={ product.id }
              product={ product }
            />
          ))
        }
      </div>
    );
  }
}

ReviewProducts.propTypes = {
  cartArray: PropTypes.arrayOf(
    PropTypes.shape({

    }).isRequired,
  ).isRequired,
};

export default ReviewProducts;
