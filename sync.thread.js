// import React, { Component } from 'react'
// import { AppRegistry } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import reactotron from 'reactotron-react-native';

reactotron
  .setAsyncStorageHandler(AsyncStorage)
  .configure({
    name: 'Sync worker',
  })
  .useReactNative()
  .connect();

reactotron.warn('Initialized');

// class App extends Component {
//   render() {
//     return null
//   }
// }
//
// AppRegistry.registerComponent('Sync', () => App)
