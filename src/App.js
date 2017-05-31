import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TheForm from './form.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to a happy place</h2>
        </div>
		<h3>Please sign in</h3>
		<br/>
		<TheForm/>
      </div>
    );
  }
}

export default App;
