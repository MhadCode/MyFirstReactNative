import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
} from 'react-native';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{width: 100, height: 100}}
          source={require('../images/logo.png')}
        />
        <Text style={styles.logoText}>Welcome to XOMU</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logoText: {
    marginVertical: 20,
    marginBottom: 70,
    fontSize: 18,
    color: 'rgba(255,255,255,0.7)',
  },
});
