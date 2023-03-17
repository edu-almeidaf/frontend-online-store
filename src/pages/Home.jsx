import React, { Component } from 'react';
import Categories from '../components/Categories';

class Home extends Component {
  state = {
    awaiting: true,
  };

  render() {
    const { awaiting } = this.state;
    return (
      <div>
        <Categories />
        {
          awaiting
            ? (
              <p
                data-testid="home-initial-message"
              >
                Digite algum termo de pesquisa ou escolha uma categoria.
              </p>
            )
            : (
              <div />
            )

        }
      </div>
    );
  }
}

export default Home;
