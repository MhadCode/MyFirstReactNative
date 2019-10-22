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

export default class Signup extends Component {
  render() {
    return (
      <View>
        <Logo />
        <Form type="Sign Up" />
        <View style={styles.signUp}>
          <Text style={styles.signText}>Already have an account?</Text>
          <Text style={styles.signUpbtn}> Sign in</Text>
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
    color: 'rgba(255,255,255,0.9)',
  },
  signUpbtn: {
    color: 'white',
    fontWeight: '500',
  },
});
