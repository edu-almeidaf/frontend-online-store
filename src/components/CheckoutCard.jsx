import React from 'react';
import PropTypes from 'prop-types';

class CheckoutCard extends React.Component {
  render() {
    const { product,
      removeProduct,
      decreaseQuantity,
      increaseQuantity,
    } = this.props;
    return (
      <div>
        <button
          onClick={ () => removeProduct(product.id) }
          data-testid="remove-product"
        >
          X

        </button>
        <img src={ product.thumbnail } alt={ product.title } />
        <h2 data-testid="shopping-cart-product-name">{ product.title }</h2>
        <div>
          <button
            onClick={ () => decreaseQuantity(product.id) }
            data-testid="product-decrease-quantity"
          >
            -

          </button>
          <p data-testid="shopping-cart-product-quantity">{ product.quantity }</p>
          <button
            onClick={ () => increaseQuantity(product.id) }
            data-testid="product-increase-quantity"
          >
            +

          </button>
        </div>
      </div>
    );
  }
}

CheckoutCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  decreaseQuantity: PropTypes.func.isRequired,
  increaseQuantity: PropTypes.func.isRequired,
  removeProduct: PropTypes.func.isRequired,

};
export default CheckoutCard;
