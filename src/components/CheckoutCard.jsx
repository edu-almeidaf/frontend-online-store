import React from 'react';
import PropTypes from 'prop-types';

class CheckoutCard extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <div>
        <img src={ product.thumbnail } alt={ product.title } />
        <h2 data-testid="shopping-cart-product-name">{ product.title }</h2>
        <div>
          <button>-</button>
          <p data-testid="shopping-cart-product-quantity">{ product.quantity }</p>
          <button>+</button>
        </div>
      </div>
    );
  }
}

CheckoutCard.propTypes = {
  product: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,

  }).isRequired,
};
export default CheckoutCard;
