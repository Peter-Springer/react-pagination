import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      names: [1, 2, 3, 4, 5, 6],
      page: 1
    }
  }

  renderNames(names) {
    const pagination = {
      1: {min: 0, max: 3},
      2: {min: 3, max: 6}
    }
    const page = pagination[this.state.page]
    const show = names.slice(page.min, page.max)
    return show.map(name => {
      return (
        <h1 key={name}>{name}</h1>
      )
    })
  }

  setPage(e) {
    this.setState({page: parseInt(e.target.innerText)})
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Basic Pagination</h2>
        </div>
        {this.renderNames(this.state.names)}
        <button onClick={(e) => this.setPage(e, this.state.page)}>1</button>
        <button onClick={(e) => this.setPage(e, this.state.page)}>2</button>
      </div>
    );
  }
}

export default App;
