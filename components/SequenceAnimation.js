import React, { Component } from 'react'
import { Animated, 
         View, 
         Text, 
         StyleSheet, 
         Image, 
         ScrollView, 
         Easing, 
       } from 'react-native'

const arr = [] 
for (let i = 1; i <= 50; i++) {
  arr.push(i)
}

export default class SequenceAnimation extends Component {
  constructor() {
    super() 
    this.state = {
      animatedValue: [],
      arr: []
    }
    arr.forEach((value) => {
      this.state.animatedValue[value] = new Animated.Value(0)
    })
    console.log(arr.length)
  }

  animateView() {
    arr.forEach((value) => {
      this.state.animatedValue[value].setValue(0)
    })
    const animations = arr.map((item) => {
      return Animated.timing(
        this.state.animatedValue[item], 
        {
          toValue: 1, 
          duration: 750, 
        }
      )
    })
    Animated.sequence(animations).start((() => this.animateView()))
  }

  componentDidMount() {
    super.componentDidMount
    this.animateView()
  }

  render() {
    const animations = arr.map((a, i) => {
      return <Animated.Text
                key={i}
                style={{
                  opacity: this.state.animatedValue[a], 
                  height: 44, 
                  width: 44, 
                  backgroundColor: 'tomato', 
                  marginLeft: 3, 
                  marginTop: 3, 
                  color: 'white',
                  fontSize: 30, 
                  fontWeight: '900' 
                }}
             >
              {i+1}
             </Animated.Text>
    })

    return (
      <View style={styles.container}>
        {animations}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: 'row', 
    flexWrap: 'wrap', // ??
    backgroundColor: '#000'
  }
})