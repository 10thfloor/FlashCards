import React, {Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Cards extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello There!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#222'
  }
});

export default Cards;
