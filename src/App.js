import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from './services/api';
import './App.css';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import ProductDetails from './pages/ProductDetails';
import ShoppingCart from './pages/ShoppingCart';
import Header from './components/Header';

class App extends React.Component {
  state = {
    query: '',
    searchResults: {},
    awaiting: true,
  };

  handleSearch = async () => {
    const { query } = this.state;
    const searchResults = await getProductsFromCategoryAndQuery('', query);
    this.setState({
      awaiting: false,
      searchResults,
    });
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
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
              />
            ) }
          />
          <Route exact path="/checkout" component={ Checkout } />
          <Route exact path="/productDetails" component={ ProductDetails } />
          <Route exact path="/shoppingCart" component={ ShoppingCart } />
        </Switch>
      </div>
    );
  }
}

export default App;
