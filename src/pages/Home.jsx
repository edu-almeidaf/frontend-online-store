import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Categories from '../components/Categories';
import SearchResults from '../components/SearchResults';

class Home extends Component {
  render() {
    const { awaiting, searchResults, handleChange, toShoppingCart } = this.props;
    return (
      <div>
        <Categories
          handleChange={ handleChange }
        />
        {
          awaiting
            ? (
              <p
                data-testid="home-initial-message"
              >
                Digite algum termo de pesquisa ou escolha uma categoria.
              </p>
            )
            : (
              <SearchResults
                searchResults={ searchResults }
                toShoppingCart={ toShoppingCart }
              />
            )

        }
      </div>
    );
  }
}

Home.propTypes = {
  awaiting: PropTypes.bool.isRequired,
  searchResults: PropTypes.arrayOf(
    PropTypes.shape({
    }),
  ),
  handleChange: PropTypes.func.isRequired,
  toShoppingCart: PropTypes.func.isRequired,
};
Home.defaultProps = {
  searchResults: [],
};

export default Home;
