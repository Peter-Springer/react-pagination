import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      names: ['pete', 'jeff', 'ben', 'david', 'kirsten', 'jacky']
    }
  }

  renderNames(names) {
    return names.map(name => {
      return (
        <h1>{name}</h1>
      )
    })
  }

  renderListings() {
  return this.props.userData.map(user => {
    return (
      <article className="listing" key={user.email}>
      <p>Name: {user.name}</p>
      <p>School: {user.school}</p>
      <p>Employer: {user.company}</p>
      <p>Location: {user.location}</p>
      <img className='user-photo'src={user.photoURL} alt='user photo'/>
      </article>
    );
  });
};

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        {this.renderNames(this.state.names)}
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
