import React, { Component } from 'react';
import './App.css';
import Poems from '../components/Poems/Poems';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Poems />
      </div>
    );
  }
}

export default App;
