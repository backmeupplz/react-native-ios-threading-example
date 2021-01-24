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
