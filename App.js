import React from 'react';
import { Text, 
         View, 
         Button, 
         StyleSheet, 
         FlatList, 
        } 
        from 'react-native';

// custom components 
import FadeView from './components/FadeView'
import RotateView from './components/RotateView'
import ScaleView from './components/ScaleView'
import MovingView from './components/MovingView'
import SequenceAnimation from './components/SequenceAnimation'
import ParallelAnimation from './components/ParalledAnimation'

const FadeAnimation = 'Fade Animation'
const ScaleAnimation = 'Scale Animation'
const MovingAnimation = 'Moving Animation'
const ParallelAnim = 'Parallel Animation'
const SequenceAnim = 'Sequence Animation'
const RotateAnimation = 'Rotate Animation'


export default class App extends React.Component {
  state = {
    hideButton: false, 
    hideAnimationView: true, 
    currentAnimation: ''
  }

  showAnimation() {
    this.setState({ 
      hideButton: !this.state.hideButton, 
      hideAnimationView: !this.state.hideAnimationView
    })
  }

  updateCurrentAnimation(animation) {
    this.setState({
      currentAnimation: animation.key
    })
  }

  render() {
    let placeholderView = <FadeView/>
    switch(this.state.currentAnimation) {
      case FadeAnimation: 
        placeholderView = <FadeView/>
        break 
      case ScaleAnimation: 
        placeholderView = <ScaleView/>
        break 
      case MovingAnimation: 
        placeholderView = <MovingView/>
        break 
      case ParallelAnim: 
        placeholderView = <ParallelAnimation/>
        break 
      case SequenceAnim: 
        placeholderView = <SequenceAnimation/>
        break 
      case RotateAnimation: 
        placeholderView = <RotateView/>
        break 
      default: 
        break 
    }
    const lineSeperator = <View style={{height: 0.5, backgroundColor: 'white'}} />
    
    const animationView = <View style={{flex: 1, backgroundColor: '#000'}}>
                  <FlatList 
                    style={{flex: 1, backgroundColor: 'orange'}}
                    data={[
                      {key: FadeAnimation},
                      {key: ScaleAnimation},
                      {key: MovingAnimation},
                      {key: ParallelAnim},
                      {key: SequenceAnim},
                      {key: RotateAnimation},
                    ]}
                    renderItem={({item}) => <Text 
                                              style={styles.item}
                                              onPress={() => this.updateCurrentAnimation(item)}
                                            >
                                              {item.key}
                                            </Text>}
                    ItemSeparatorComponent={() => lineSeperator}
                  />
                  <View style={{flex: 2, backgroundColor: '#000', marginTop: 80}}>
                    {placeholderView}
                  </View>
                </View>
    return (
      animationView
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#000', 
  }, 
  item: {
    fontSize: 25, 
    fontWeight: '700',
    padding: 10, 
    color: 'white'
  }
})
