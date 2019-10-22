import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Login from './src/pages/Login';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar back groundColor="#1c313a" barStyle="light-content" />
        <Login />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#455a64',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textColor: {
    color: 'white',
    fontSize: 18,
  },
});
