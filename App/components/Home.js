import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import LogoParticles from '../imports/LogoParticles';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container} >
        <Image style={styles.image} source={require('../images/jslogo.png')} />
        <LogoParticles />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F8CE01'
  },
  image: {
    width: 125,
    height: 125,
    position: 'relative',
    top:-50
  }
});
