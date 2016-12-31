import React, { Component } from 'react'
import { View, Text, StyleSheet, Animated, Easing, Dimensions } from 'react-native'
import Button from 'apsl-react-native-button'
import { JSYellow } from '../imports/Styles'
import tinycolor from 'tinycolor2'
/*
  FlashCard Notes:

  Card series are a set of 'slides' with a memory quiz.
  At specific inflection points, users will be prompted to complete
  a more signifigant timed challenge via the website.
  Learners can choose to initiate the test or 'come back later'.
  To initiate the test a second time, the Learner must complete the sequence of 'slides'
  to the inflection point again.

  Need a Pass / Fail mechanic.

*/

class Cards extends Component {

  constructor () {
    super()
    this.state = {
      soloButtonHeight: new Animated.Value(500),
      togetherButtonHeight: new Animated.Value(300)
    }
  }

  componentDidMount () {
    Animated.parallel([
      Animated.delay(1000),
      Animated.timing(
        this.state.soloButtonHeight,
        {
          toValue: 0,
          duration: 555,
          easing: Easing.elastic(0.4)
        }
      ),
      Animated.timing(
        this.state.togetherButtonHeight,
        {
          toValue: 0,
          duration: 400,
          easing: Easing.elastic(0.4)
        }
      )
    ]).start()
  }

  render () {
    return (
      <View style={[styles.container]}>
        <Animated.View style={[{ transform: [{ translateY: this.state.soloButtonHeight }] }]}>
          <Button style={styles.togetherButton} textStyle={{ fontSize: 18 }}>
                <View>
                  <Text style={styles.titleText}>Learn Together</Text>
                  <Text>Connect with JavaScript professionals. Join classrooms. Sharpen your knowledge by completing challenges.</Text>
                </View>
            </Button>
        </Animated.View>
        <Animated.View style={[{ transform: [{ translateY: this.state.togetherButtonHeight }] }]}>
          <Button style={styles.soloButton} textStyle={{ fontSize: 18 }}>
              <View>
                  <Text style={styles.titleText}>Learn Solo</Text>
                  <Text>Start the flash-card activity. Choose from a list of topics, and learn by testing your memory.</Text>
              </View>
          </Button>
        </Animated.View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    margin: 0,
    padding: 0
  },
  soloButton: {
    height: Dimensions.get('window').height / 2,
    backgroundColor: tinycolor(JSYellow).lighten(15).toString(),
    borderRadius: 0,
    margin: 0,
    padding: 20,
    borderColor: 'rgba(0,0,0,0)',
    top: -10
  },
  togetherButton: {
    height: Dimensions.get('window').height / 2,
    backgroundColor: tinycolor(JSYellow),
    borderRadius: 0,
    margin: 0,
    padding: 20,
    borderColor: 'rgba(0,0,0,0)'
  },
  titleText: {
    fontSize: 20,
    fontWeight: '800',
    paddingBottom: 20
  },
  statsText : {
    paddingTop: 10,
    fontStyle: 'italic'
  }
})

export default Cards
