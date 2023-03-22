import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductsCards extends Component {
  render() {
    const { result, toShoppingCart } = this.props;
    const { shipping } = result;
    const freeShipping = shipping.free_shipping;
    return (
      <div id={ result.id } data-testid="product">
        <Link data-testid="product-detail-link" to={ `/productDetails/${result.id}` }>
          <img src={ result.thumbnail } alt={ result.title } />
          <h3>{ result.title }</h3>
          <p>{ result.price }</p>
        </Link>
        { freeShipping && <p data-testid="free-shipping">Frete Grátis</p> }
        <button
          data-testid="product-add-to-cart"
          onClick={ toShoppingCart }
        >
          Adicionar ao carrinho

        </button>
      </div>
    );
  }
}

ProductsCards.propTypes = {
  result: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool.isRequired,
    }).isRequired,
  }).isRequired,
  toShoppingCart: PropTypes.func.isRequired,
};

export default ProductsCards;
