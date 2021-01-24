# react-native-ios-threading-example
Example of multiple React Native threads in the same iOS app. Answering my own question [here](https://stackoverflow.com/questions/65866799/can-i-instantiate-two-rctbridge-instances) and [here](https://github.com/joltup/react-native-threads/issues/123).

Note the second RCTBridge created in the `AppDelegate.m` and two Reactotron connections from the main app and the thread worker app.
