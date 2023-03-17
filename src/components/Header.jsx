import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  state = {
    query: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { query } = this.state;
    return (
      <div>
        <label htmlFor="search">
          <input
            type="text"
            id="search"
            name="query"
            value={ query }
            placeholder="Digite um produto"
            onChange={ this.handleChange }
          />
        </label>
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

export default Header;
