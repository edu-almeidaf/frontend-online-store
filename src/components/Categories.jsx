import React, { Component } from 'react';
import { getCategories } from '../services/api';

class Categories extends Component {
  state = {
    categories: [],
  };

  componentDidMount() {
    this.fetchCategories();
  }

  fetchCategories = async () => {
    const categories = await getCategories();
    this.setState({
      categories,
    });
  };

  render() {
    const { categories } = this.state;
    return (
      <div>
        {
          categories.map((categoria) => (
            <label
              data-testid="category"
              htmlFor={ categoria.id }
              key={ categoria.id }
            >

              { categoria.name }

              <input type="radio" name="categorias" id={ categoria.id } />
            </label>
          ))
        }

      </div>
    );
  }
}

export default Categories;
