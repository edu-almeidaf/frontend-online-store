import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductById } from '../services/api';

class ProductDetails extends Component {
  state = {
    url: '',
    title: '',
    price: 0,

  };

  componentDidMount() {
    this.setProductDetails();
  }

  handleClick = () => {
    const { history } = this.props;
    history.push('/shoppingCart');
  };

  setProductDetails = async () => {
    const { match: { params: { id } } } = this.props;
    const getProductDetails = await getProductById(id);
    const { url } = getProductDetails.pictures[0];
    const { price, title } = getProductDetails;
    this.setState({
      url,
      title,
      price,
    });
    console.log(url, title, price);
  };

  render() {
    const { url, title, price } = this.state;

    return (
      <div>
        <h1 data-testid="product-detail-name">{ title }</h1>
        <img
          data-testid="product-detail-image"
          src={ url }
          alt={ title }
        />
        <h3 data-testid="product-detail-price">{ price }</h3>
        <button
          data-testid="shopping-cart-button"
          onClick={ this.handleClick }

        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
export default ProductDetails;
