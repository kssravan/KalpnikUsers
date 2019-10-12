import React, { Component } from 'react';
import { Text } from 'react-native';
import { Provider } from 'react-redux';
import Navigation from './app/Navigation';
import store from './app/store';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}

export default App;
