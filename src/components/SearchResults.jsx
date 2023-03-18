import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductsCards from './ProductsCards';

class SearchResults extends Component {
  render() {
    const { searchResults } = this.props;
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
};

export default SearchResults;
