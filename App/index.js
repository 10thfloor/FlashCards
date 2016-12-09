import React, { Component } from 'react';
import { View } from 'react-native';
import { Router } from 'react-native-router-flux';

import scenes from './scenes';

export default class FlashCards extends Component {
  render() {
    return (
        <Router scenes={scenes} style={{ backgroundColor: '#F8CE01'}} />
    );
  }
}


