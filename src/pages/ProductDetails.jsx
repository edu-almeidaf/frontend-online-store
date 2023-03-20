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

  // handleClick = () => {
  //   const { history } = this.props;
  //   history.push('/shoppingCart');
  // };

  setProductDetails = async () => {
    const { match: { params: { id } } } = this.props;
    const getProductDetails = await getProductById(id);
    const { url } = getProductDetails.pictures[0];
    const { price, title } = getProductDetails;
    // const idProduct = getProductDetails.id;
    this.setState({
      url,
      title,
      price,
    });
  };

  render() {
    const { url, title, price } = this.state;
    const { toShoppingCart, match: { params: { id } } } = this.props;

    return (
      <div id={ id }>
        <h1 data-testid="product-detail-name">{ title }</h1>
        <img
          data-testid="product-detail-image"
          src={ url }
          alt={ title }
        />
        <h3 data-testid="product-detail-price">{ price }</h3>
        <button
          data-testid="product-detail-add-to-cart"
          onClick={ toShoppingCart }

        >
          Adicionar ao Carrinho
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
  toShoppingCart: PropTypes.func.isRequired,
};
export default ProductDetails;
