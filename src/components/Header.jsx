import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    const { query, handleChange, handleSearch } = this.props;
    return (
      <div>
        <label htmlFor="search">
          <input
            data-testid="query-input"
            type="text"
            id="search"
            name="query"
            value={ query }
            placeholder="Digite um produto"
            onChange={ handleChange }
          />
        </label>
        <button
          data-testid="query-button"
          onClick={ handleSearch }
        >
          Pesquisar
        </button>
        <Link
          data-testid="shopping-cart-button"
          to="/shoppingCart"
        >
          Carrinho de Compras

        </Link>
      </div>
    );
  }
}

Header.propTypes = {
  query: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
};

export default Header;
