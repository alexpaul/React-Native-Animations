import React, { Component } from 'react'
import { Animated, 
         View, 
         Text, 
         Image, 
         Easing, 
       } from 'react-native'

export default class MovingView extends Component {
  state = {
    movingScale: new Animated.Value(0)
  }

  componentDidMount() {
    super.componentDidMount
    this.animateView() 
  }

  animateView() {
    let { movingScale } = this.state
    movingScale.setValue(0)
    Animated.timing(
      this.state.movingScale, 
      {
        toValue: 1, 
        duration: 10000, 
        easing: Easing.linear //.ease, 
      }

    ).start(() => this.animateView()) 
  }

  render() {
    const move = this.state.movingScale.interpolate({
      inputRange: [0, 1], 
      outputRange: [0, 600]
    })

    return(
      <Animated.Image
        style={{
          width: 200, 
          height: 200,
          marginLeft: move,
        }}
        source={require('../assets/pirate-ship-2.png')}
      />
    )
  }
}