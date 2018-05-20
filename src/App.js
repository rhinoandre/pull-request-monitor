import React, { Component } from 'react';
import logo from './logo.svg';
import './scss/colors.css';
import './App.css';

import OrganizationList from './components/Organizations';

class App extends Component {
  repositorySelected(url) {
    console.log(url);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <OrganizationList onSelectRepository={this.repositorySelected} />
      </div>
    );
  }
}

export default App;
