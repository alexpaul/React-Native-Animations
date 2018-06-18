import React, { Component } from 'react'
import { Animated, 
         View, 
         Text, 
         Image, 
         Easing, 
       } from 'react-native'

export default class RotateView extends Component {
  state = {
    rotateValue: new Animated.Value(0) // initial rotate value
  }

  rotateView() {
    let { rotateValue } = this.state
    rotateValue.setValue(0)
    Animated.timing(
      this.state.rotateValue, 
      {
        toValue: 1, 
        duration: 3000, 
        easing: Easing.linear, 
      }
    ).start(() => this.rotateView())
  }

  componentDidMount() {
    super.componentDidMount
    this.rotateView() 
  }

  render() {
    const spin = this.state.rotateValue.interpolate({
      inputRange: [0, 1], 
      outputRange: ['0deg', '360deg']
    })

    return(
      <Animated.View
        style={{
          alignItems: 'center', 
          justifyContent: 'center', 
          transform:[{ rotate: spin }]
        }}
      >
        <Image
          source={require('../assets/universe-icon.png')}
          style={{
            width: 200, 
            height: 200, 
          }}
        />
      </Animated.View>
    )
  }
}