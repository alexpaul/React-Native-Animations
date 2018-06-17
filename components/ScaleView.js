import React, { Component } from 'react'
import { Animated, 
         View, 
         Text, 
         Image, 
         Easing, 
       } from 'react-native'

export default class ScaleView extends Component {
  state = {
    scaleValue: new Animated.Value(0)
  }

  animateView = () => {
    let { scaleValue } = this.state
    scaleValue.setValue(0)
    Animated.timing(
      this.state.scaleValue, 
      {
        toValue: 1, 
        duration: 3000, 
        easing: Easing.bounce
      }
    ).start(() => this.animateView()) 
  }

  componentDidMount() {
    super.componentDidMount
    this.animateView() 
    console.log('scale view did mount')
  }

  render() {
    // interpolation 
    const scale = this.state.scaleValue.interpolate({
      inputRange: [0, 0.5, 1], 
      outputRange: [0, 8, 0]
    })

    return(
      <Animated.Image
        style={{
          height: 100, 
          width: 100,
          transform: [{scale: scale}]
        }}
        source={require('../assets/mothra.png')}
      />
    )
  }
}