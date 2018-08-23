import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './form';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputTypes : ['default']
    }
  }

  next(type) {
    const { inputTypes } = this.state
    inputTypes.push(type)
    this.setState({inputTypes})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Form inputTypes={this.state.inputTypes} next={this.next.bind(this)} />
      </div>
    );
  }
}

export default App;
