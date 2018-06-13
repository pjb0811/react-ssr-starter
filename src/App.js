import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Routes from './components/pages';

class App extends Component {
  render() {
    return <Routes />;
  }
}

export default hot(module)(App);
