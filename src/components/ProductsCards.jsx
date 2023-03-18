import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductsCards extends Component {
  render() {
    const { result } = this.props;
    return (
      <div data-testid="product">
        <img src={ result.thumbnail } alt={ result.title } />
        <h3>{ result.title }</h3>
        <p>{ result.price }</p>
      </div>
    );
  }
}

ProductsCards.propTypes = {
  result: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductsCards;
