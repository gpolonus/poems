import React, { Component } from 'react';
import './App.css';
import Layout from './Layout/Layout';

class App extends Component {
  
  state = {
    editing: false
  };
  render() {
    return (
      <Layout className="App" />
    );
  }
}

export default App;
