import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    const { handleChange } = this.props;
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

              <input
                type="radio"
                name="categoryId"
                id={ categoria.id }
                value={ categoria.id }
                onChange={ handleChange }
              />
            </label>
          ))
        }

      </div>
    );
  }
}

Categories.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default Categories;
