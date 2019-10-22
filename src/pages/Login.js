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
import Form from '../components/Form';

export default class Login extends Component {
  render() {
    return (
      <View>
        <Logo />
        <Form />
        <View style={styles.signUp}>
          <Text style={styles.signText}>Don't have an account yet?</Text>
          <Text style={styles.signUpbtn}> Sign Up</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textColor: {
    color: 'white',
    fontSize: 18,
  },
  signUp: {
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginVertical: 16,
    flexDirection: 'row',
  },
  signText: {
    color: 'rgba(255,255,255,0.3)',
  },
  signUpbtn: {
    color: 'white',
  },
});
