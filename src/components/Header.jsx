import React, { Component } from 'react';

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
      </div>
    );
  }
}

export default Header;
