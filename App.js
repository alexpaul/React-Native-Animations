import React from 'react';
import { Text, 
         View, 
         Button, 
         StyleSheet 
        } 
        from 'react-native';

// custom components 
import FadeView from './components/FadeView'
import RotateView from './components/RotateView'
import ScaleView from './components/ScaleView'
import MovingView from './components/MovingView'
import SequenceAnimation from './components/SequenceAnimation'
import ParallelAnimation from './components/ParalledAnimation'

export default class App extends React.Component {
  state = {
    hideButton: false, 
    hideAnimationView: true, 
  }

  showAnimation() {
    this.setState({ 
      hideButton: !this.state.hideButton, 
      hideAnimationView: !this.state.hideAnimationView
    })
  }

  render() {
    return(
      <View style={styles.container}>
        {
          !this.state.hideButton ? 
            <Button
              style={{alignItems:'center'}}
              title='Show Animation'
              onPress={() => this.showAnimation()}
            />
            : 
            <View style={{alignItems: 'center'}}>
              <Button
                title='Hide Animation'
                onPress={() => this.showAnimation()}
              />

              {/* Only for the moving animation */}
              {/* <View style={{marginTop: 200, marginLeft: -500, width: '80%', height: '80%'}}> */}
                {/* Moving View */}
                {/* <MovingView /> */}

                <View style={{marginTop: 100, width: '80%', height: '80%'}}>

                {/* Fade Animation  */}
                {/* <FadeView/> */}

                {/* Rotate Animation  */}
                {/* <RotateView/> */}

                {/* Scale View */}
                {/* <ScaleView/> */}

                {/* Sequence Animation */}
                {/* <SequenceAnimation/> */}

                {/* Parallel Animation */}
                <ParallelAnimation/>

              </View>
            </View> 
        }

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    //alignItems: 'center', 
    backgroundColor: '#000', 
  }, 
})
