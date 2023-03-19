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
    const { query, searchResults, awaiting } = this.state;
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
              />
            ) }
          />
          <Route exact path="/checkout" component={ Checkout } />
          <Route exact path="/productDetails/:id" component={ ProductDetails } />
          <Route exact path="/shoppingCart" component={ ShoppingCart } />
        </Switch>
      </div>
    );
  }
}

export default App;
