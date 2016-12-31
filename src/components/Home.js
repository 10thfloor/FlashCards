import React, { Component } from 'react'
import { Animated, Easing, View, Text, StyleSheet, Image, Dimensions, PanResponder } from 'react-native'
import SimpleGesture from 'react-native-simple-gesture'
import { Actions } from 'react-native-router-flux'
import JSParticle from '../imports/JSParticle'
import { JSYellow } from '../imports/Styles'
import tinycolor from 'tinycolor2'

export default class HomeScreen extends Component {

  constructor () {
    super()
    this.numParticles = 20
    this.state = {
      titleOpacity: new Animated.Value(0),
      swipeY: new Animated.Value(0)
    }

    this.particles = []
    for (let i = 0; i < this.numParticles; i++) {
      this.particles.push(<JSParticle key={i} />)
    }
  }

  componentWillMount () {
    this._panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: (e, gs) => {
        let sgs = new SimpleGesture(e, gs)
        return sgs.isSwipeUp()
      },
      onPanResponderMove: (evt, gestureState) => {
        if (gestureState.dy <= 0) {
          this.state.swipeY.setValue(gestureState.dy)
        }
      },
      onPanResponderRelease: (evt, gestureState) => {
        Animated.timing(
          this.state.swipeY, {
            toValue: -1000,
            duration: 1000,
            easing: Easing.elastic(0.4)
          }
        ).start()
        Actions.cards()
      }
    })
  }

  componentDidMount () {
    Animated.sequence([
      Animated.delay(500),
      Animated.timing(
        this.state.titleOpacity, {
          toValue: 1,
          duration: 1700,
          easing: Easing.elastic(0.4)
        }
      ),
      Animated.timing(
        this.state.titleOpacity, {
          toValue: 1,
          duration: 1700,
          easing: Easing.elastic(0.4)
        }
      )
    ]).start()
  }

  render () {
    let { swipeY } = this.state
    let [translateY] = [swipeY]
    let animatedStyles = { transform: [{ translateY }] }

    return (
      <View style={{ flex: 1, backgroundColor: '#F8CE01'}}>
        <Animated.View style={[styles.container, animatedStyles]} {...this._panResponder.panHandlers}>
          <View style={styles.particles}>
            {this.particles.map(p => p)}
          </View>
          <Image style={styles.image} source={require('../images/jslogo.png')} />
          <Animated.View style={{ opacity: this.state.titleOpacity }}>
            <Text style={styles.titleJS}>JavaScript</Text>
            <Text style={styles.titleTagline} >Flashcards</Text>
          </Animated.View>
          <Text style={
            {
              backgroundColor: 'transparent',
              fontFamily: 'HelveticaNeue-Thin'
            }
          }>Swipe up to Continue</Text>
        </Animated.View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: JSYellow,
    width: Dimensions.get('window').width
  },
  particles: {
    margin: 0,
    backgroundColor: 'red',
    flex: 1,
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    left: 50,
    top: 100,
    position: 'absolute'
  },
  image: {
    width: 125,
    height: 125,
    position: 'relative',
    top: -50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleJS: {
    fontWeight: '700',
    fontSize: 40,
    position: 'relative',
    left: -10,
    fontFamily: 'Helvetica-Bold',
    backgroundColor: 'transparent'
  },
  titleTagline: {
    fontSize: 40,
    fontStyle: 'italic',
    fontWeight: '100',
    letterSpacing: 2,
    position: 'relative',
    top: -10,
    left: 10,
    backgroundColor: 'transparent',
    fontFamily: 'HelveticaNeue-Thin'
  }
})
