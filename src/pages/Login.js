import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Logo from '../components/Logo';

export default class Login extends Component {
  render() {
    return (
      <View>
        <Logo />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textColor: {
    color: 'white',
    fontSize: 18,
  },
});
