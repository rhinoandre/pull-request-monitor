import React, { Component } from 'react';
import logo from './logo.svg';
import './scss/colors.css';
import './App.css';

import OrganizationList from './components/Organizations';
import RepositoriesSelected from './components/RepositoriesSelected';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <RepositoriesSelected />
        <OrganizationList />
      </div>
    );
  }
}

export default App;
