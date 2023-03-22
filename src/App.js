import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { getProductsFromCategoryAndQuery, getProductsFromCategory } from './services/api';
import './App.css';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import ProductDetails from './pages/ProductDetails';
import ShoppingCart from './pages/ShoppingCart';
import Header from './components/Header';

class App extends React.Component {
  state = {
    query: '',
    categoryId: '',
    searchResults: {},
    awaiting: true,
    cart: [],
  };

  componentDidMount() {
    this.getToLocalStorage();
  }

  removeProduct = (productId) => {
    const { cart } = this.state;
    this.setState({
      cart: cart.filter((product) => (product.id !== productId)),
    }, this.AddToLocalStorage);
  };

  increaseQuantity = (productId) => {
    const { cart } = this.state;
    const updatedCart = cart.map((product) => {
      if (product.id === productId) {
        if (product.quantity < product.available_quantity) {
          return { ...product, quantity: product.quantity + 1 };
        }
        return { ...product, quantity: product.available_quantity };
      }
      return product;
    });
    this.setState(() => ({
      cart: updatedCart,
    }), () => {
      this.AddToLocalStorage();
    });
  };

  decreaseQuantity = (productId) => {
    const { cart } = this.state;
    const updatedCart = cart.map((product) => {
      if (product.id === productId) {
        if (product.quantity > 1) {
          return { ...product, quantity: product.quantity - 1 };
        }
        return { ...product, quantity: 1 };
      }
      return product;
    });
    this.setState(() => ({
      cart: updatedCart,
    }), () => {
      this.AddToLocalStorage();
    });
  };

  getToLocalStorage = () => {
    const local = JSON.parse(localStorage.getItem('Cart'));
    if (!local) {
      localStorage.setItem('Cart', JSON.stringify([]));
    } else {
      this.setState({
        cart: local,
      });
    }
  };

  AddToLocalStorage = () => {
    const { cart } = this.state;
    localStorage.setItem('Cart', JSON.stringify(cart));
  };

  toShoppingCart = ({ target }) => {
    const { searchResults, cart } = this.state;
    const productId = target.parentNode.id;
    const productSelected = searchResults
      .results.find((result) => result.id === productId);
    const searchProduct = cart.find((product) => product.id === productId);

    if (searchProduct) {
      searchProduct.quantity += 1;
      this.setState(() => ({
        cart,
      }), this.AddToLocalStorage);
    } else {
      this.setState((prevState) => ({
        cart: [...prevState.cart,
          { ...productSelected, quantity: 1 }],
      }), this.AddToLocalStorage);
    }
  };

  handleSearch = async () => {
    const { query, categoryId } = this.state;
    const searchResults = await getProductsFromCategoryAndQuery(categoryId, query);
    this.setState({
      awaiting: false,
      searchResults,
    });
  };

  handleSearchCategory = async () => {
    const { categoryId } = this.state;
    const searchResults = await getProductsFromCategory(categoryId);
    this.setState({
      awaiting: false,
      searchResults,
    });
  };

  handleChange = ({ target }) => {
    const { name, value, type } = target;
    if (type === 'radio') {
      this.setState({
        [name]: value,
      }, this.handleSearchCategory);
    } else {
      this.setState({
        [name]: value,
      });
    }
  };

  render() {
    const { query,
      searchResults,
      awaiting,
      cart,
    } = this.state;
    return (
      <div className="App">
        <Header
          query={ query }
          handleChange={ this.handleChange }
          handleSearch={ this.handleSearch }
        />
        <Switch>
          <Route
            exact
            path="/"
            render={ () => (
              <Home
                searchResults={ searchResults.results }
                awaiting={ awaiting }
                handleChange={ this.handleChange }
                toShoppingCart={ this.toShoppingCart }
              />
            ) }
          />
          <Route exact path="/checkout" component={ Checkout } />
          <Route
            exact
            path="/productDetails/:id"
            render={ (props) => (
              <ProductDetails
                toShoppingCart={ this.toShoppingCart }
                { ...props }
              />
            ) }
          />
          <Route
            exact
            path="/shoppingCart"
            render={ () => (
              <ShoppingCart
                cart={ cart }
                increaseQuantity={ this.increaseQuantity }
                decreaseQuantity={ this.decreaseQuantity }
                removeProduct={ this.removeProduct }
              />
            ) }
          />
        </Switch>
      </div>
    );
  }
}

export default App;
