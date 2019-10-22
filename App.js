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
import Singup from './src/pages/Signup';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#350a6f" barStyle="light-content" />
        <Singup />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#562e8c',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textColor: {
    color: 'white',
    fontSize: 18,
  },
});
