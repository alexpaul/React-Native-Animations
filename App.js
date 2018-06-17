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

export default class App extends React.Component {
  state = {
    hideButton: false, 
    hideAnimationView: true, 
  }

  showAnimation() {
    console.log('show animation')
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
              title='Show Animation'
              onPress={() => this.showAnimation()}
            />
            : 
            <View style={{alignItems: 'center'}}>
              <Button
                title='Hide Animation'
                onPress={() => this.showAnimation()}
              />
              <View style={{marginTop: 200, marginLeft: -600, width: '80%', height: '80%'}}>

                {/* Fade Animation  */}
                {/* <FadeView/> */}

                {/* Rotate Animation  */}
                {/* <RotateView/> */}

                {/* Scale View */}
                {/* <ScaleView/> */}

                {/* Moving View */}
                <MovingView />

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
