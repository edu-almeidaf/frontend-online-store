import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import { getProductsFromCategoryAndQuery } from './services/api';
import './App.css';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import ProductDetails from './pages/ProductDetails';
import ShoppingCart from './pages/ShoppingCart';
import Header from './components/Header';

class App extends React.Component {
  // componentDidMount() {
  //   this.teste();
  // }

  // teste = async () => {
  //   await getProductsFromCategoryAndQuery('', 'geladeira');
  // };

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/checkout" component={ Checkout } />
          <Route exact path="/productDetails" component={ ProductDetails } />
          <Route exact path="/shoppingCart" component={ ShoppingCart } />
        </Switch>
      </div>
    );
  }
}

export default App;
