import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  createRouter,
  NavigationProvider,
  StackNavigation,
} from '@exponent/ex-navigation';

import HomeScreen from './components/Home';

const Router = createRouter(() => ({
  home: () => HomeScreen,
}));

export default class FlashCards extends Component {
  render() {
    return (
       <NavigationProvider router={Router}>
        <StackNavigation initialRoute={Router.getRoute('home')} />
      </NavigationProvider>
    );
  }
}


