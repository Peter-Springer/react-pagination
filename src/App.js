import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      names: ['pete', 'jeff', 'ben', 'david', 'kirsten', 'jacky'],
      page: 1
    }
  }

  renderNames(names) {
    return names.map(name => {
      return (
        <h1>{name}</h1>
      )
    })
  }

  setPage(e) {
    this.setState({page: e.target.innerText})
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Basic Pagination</h2>
        </div>
        {this.renderNames(this.state.names)}
        <button onClick={(e) => this.setPage(e)}>1</button><button onClick={(e) => this.setPage(e)}>2</button>
      </div>
    );
  }
}

export default App;
