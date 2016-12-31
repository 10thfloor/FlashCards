import React, { Component } from 'react'
import { Animated, Easing, Image } from 'react-native'

export default class JSParticle extends Component {

  constructor () {
    super()
    this.vector = [this._getRandom(400, -400), this._getRandom(400, -400)]
    this.duration = this._getRandom(2000, 10000)
    this.size = this._getRandom(0.3, 0.5)
    this.state = {
      opacity: new Animated.Value(0),
      scale: this.size,
      position: [
        new Animated.Value(0),
        new Animated.Value(0)
      ]
    }
  }

  componentDidMount () {
    this._startAnimation()
  }

  _getRandom (max, min) {
    return Math.random() * (max - min) + min
  }

  _reset () {
    this.setState({
      opacity: new Animated.Value(1),
      scale: this.size,
      position: [
        new Animated.Value(0),
        new Animated.Value(0)
      ]
    })
  }

  _startAnimation () {
    Animated.parallel([
      Animated.delay(this._getRandom(0, 10000)),
      Animated.timing(
        this.state.position[0], {
          toValue: this.vector[0],
          duration: 3000,
          easing: Easing.elastic(0.4)
        }
      ),
      Animated.timing(
        this.state.position[1], {
          toValue: this.vector[1],
          duration: 3000,
          easing: Easing.elastic(0.4)
        }
      ),
      Animated.sequence([
        Animated.timing(
          this.state.opacity, {
            toValue: 1,
            duration: 0,
            easing: Easing.elastic(0.4)
          }
        ),
        Animated.timing(
          this.state.opacity, {
            toValue: 0,
            duration: 3000,
            easing: Easing.elastic(0.4)
          }
        )
      ])
    ]).start(() => {
      this._reset()
      this._startAnimation()
    })
  }

  render () {
    return (
      <Animated.View style={{
        position: 'absolute',
        opacity: this.state.opacity,
        transform: [
          { translateX: this.state.position[0] },
          { translateY: this.state.position[1] }
        ]
      }}>
        <Image style={{
          transform: [
            { scaleX: this.size },
            { scaleY: this.size }
          ]
        }} source={require('../images/jslogo.png')} />
      </Animated.View>
    )
  }
}
