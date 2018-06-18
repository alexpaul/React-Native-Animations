import React from 'react';
import { Text, 
         View, 
         Button, 
         StyleSheet, 
         FlatList, 
        } 
        from 'react-native';

// third party libraries 
import { createStackNavigator } from 'react-navigation'

// screens 
import MainScreen from './screens/MainScreen'

const RootStack = createStackNavigator({
  Home: MainScreen
})

export default class App extends React.Component {
  render() {
    return(
      <RootStack />
    )
  }
}
