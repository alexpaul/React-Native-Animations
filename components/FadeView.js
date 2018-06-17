import React, { Component } from 'react'
import { Animated, 
         View, 
         Text 
       } from 'react-native'

export default class FadeView extends Component {
  state = {
    fadeAnim: new Animated.Value(0) // initial value 
  }

  animateView() {
    // destructuring
    let { fadeAnim } = this.state
    fadeAnim.setValue(0)

    // animates a value over time 
    // By default, timing will use a easeInOut
    // You can specify a different easing function by passing a easing parameter
    Animated.timing( 
      this.state.fadeAnim, 
      {
        toValue: 1, // go to a value of 1 
        duration: 3000, // seconds
      }
    ).start((() => this.animateView())) // starts the animation 
  }

  componentDidMount() {
    super.componentDidMount
    this.animateView()
  }

  render() {
    // destructuring 
    let { fadeAnim } = this.state 
    return(
      <Animated.View  
        style={{
          //...this.props.style, 
          opacity: fadeAnim, // bind opacity to animated value
          //alignItems: 'center', 
          //justifyContent: 'center', 
          //width: 400, 
          //flex: 1, 
          //height:400, 
          backgroundColor: 'limegreen'
        }}
      >
        {/* {this.props.children} */}
        <Text 
          style={{fontSize: 40, fontFamily: 'Chalkboard SE', color: 'white', paddingLeft: 10, paddingRight: 10}}
          textAlign='right'
          numberOfLines={3}
        >
          Congratulations 2018 iOS 4.3 Fellows
        </Text>
      </Animated.View>
    )
  }
}