import React, { Component } from 'react'
import { Animated, 
         View, 
         Text, 
         StyleSheet, 
         Image, 
         Button, 
         ScrollView, 
         Easing, 
       } from 'react-native'

export default class ParallelAnimation extends Component {
  constructor() {
    super() 
    this.state = {
      scaleValue: new Animated.Value(0),
      rotateValue: new Animated.Value(0),
      positionValue: new Animated.Value(0),
    }
  }

  componentDidMount() {
    super.componentDidMount
    this.animateView() 
  }

  animateView() {
    let { scaleValue, rotateValue, positionValue } = this.state
    scaleValue.setValue(0)
    rotateValue.setValue(0)
    positionValue.setValue(0)
    const createAnimation = function(value, duration, easing, delay = 0) {
      return Animated.timing(
        value, 
        {
          toValue: 1, 
          duration, 
          easing, 
          delay
        }
      )
    }
    Animated.parallel([
      createAnimation(scaleValue, 2000, Easing.ease), 
      createAnimation(rotateValue, 1000, Easing.ease, 1000), 
      createAnimation(positionValue, 1000, Easing.ease, 2000)
    ]).start(() => this.animateView()) 
  }

  render() {
   let { scaleValue, rotateValue, positionValue } = this.state
    const scaleText = scaleValue.interpolate({
      inputRange: [0, 1], 
      outputRange: [0.2, 2]
    })
    const spinText = rotateValue.interpolate({
      inputRange: [0, 1], 
      outputRange: ['0deg', '720deg']
    })
    const introButton = positionValue.interpolate({
      inputRange: [0, 1], 
      outputRange: [100, 400]
    })
    return(
      <View style={styles.container}>
        <Animated.View
          style={{
            transform: [{scale: scaleText}]
          }}
        > 
          <Text style={{color: 'orange'}}>Welcome</Text>
        </Animated.View>
        <Animated.View
          style={{
            transform: [{rotate: spinText}]
          }}
        >
          <Text style={{color: 'white', fontWeight: '900'}}>Spin the wheel</Text>
        </Animated.View>
        <Animated.View
          style={{
            top: introButton, 
            position: 'absolute'
          }}
        >
          <Button 
            title='Intro to React-Native'
            onPress={() => console.log('button pressed')}
            color='limegreen'
          />
        </Animated.View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#000', 
    alignItems: 'center', 
    justifyContent: 'center'
  }, 
})