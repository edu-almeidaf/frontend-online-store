import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductsCards from './ProductsCards';

class SearchResults extends Component {
  render() {
    const { searchResults, toShoppingCart } = this.props;
    console.log(searchResults);
    return (
      <div>
        {
          searchResults.length === 0
            ? <p>Nenhum produto foi encontrado</p>
            : (
              searchResults.map((result) => (
                <ProductsCards
                  key={ result.id }
                  result={ result }
                  toShoppingCart={ toShoppingCart }
                />
              ))
            )
        }
      </div>
    );
  }
}

SearchResults.propTypes = {
  searchResults: PropTypes.arrayOf(
    PropTypes.shape({
    }).isRequired,
  ).isRequired,
  toShoppingCart: PropTypes.func.isRequired,
};

export default SearchResults;
