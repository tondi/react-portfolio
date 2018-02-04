import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header/';
import Grid from './components/Grid/';

class App extends Component {
  render() {
    return (
      <div className='container app'>
        <Header />
        <Grid />
      </div>
    );
  }
}

export default App;