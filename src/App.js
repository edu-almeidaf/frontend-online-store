import React from 'react';
import logo from './logo.svg';
import { getProductsFromCategoryAndQuery } from './services/api';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    this.teste();
  }

  teste = async () => {
    await getProductsFromCategoryAndQuery('', 'geladeira');
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
          <p>Edit src/App.js and save to reload.</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;