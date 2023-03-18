import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Categories from '../components/Categories';
import SearchResults from '../components/SearchResults';

class Home extends Component {
  render() {
    const { awaiting, searchResults } = this.props;
    return (
      <div>
        <Categories />
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
};
Home.defaultProps = {
  searchResults: [],
};

export default Home;
