import React, { Component } from 'react';

class Home extends Component {
  state = {
    awaiting: true,
  };

  render() {
    const { awaiting } = this.state;
    if (awaiting) {
      return (
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      );
    }
    return (
      <div>
        oi
      </div>
    );
  }
}

export default Home;
