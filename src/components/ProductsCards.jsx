import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductsCards extends Component {
  render() {
    const { result } = this.props;
    return (
      <div data-testid="product">
        <Link data-testid="product-detail-link" to={ `/productDetails/${result.id}` }>
          <img src={ result.thumbnail } alt={ result.title } />
          <h3>{ result.title }</h3>
          <p>{ result.price }</p>
        </Link>
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
  }).isRequired,
};

export default ProductsCards;
