import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class Form extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Email"
          placeholderTextColor="white"
          selectionColor="white"
          keyboardType="email-address"
          onSubmitEditing={() => this.password.focus()}
        />
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="white"
          ref={input => (this.password = input)}
        />
        <TouchableOpacity style={styles.btnLogin}>
          <Text style={styles.btnText}>{this.props.type}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputBox: {
    width: 300,
    backgroundColor: '#7b46c4',
    borderRadius: 50,
    paddingHorizontal: 15,
    fontSize: 16,
    color: 'white',
    marginVertical: 10,
  },
  btnText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
    textAlign: 'center',
  },
  btnLogin: {
    width: 300,
    borderRadius: 50,
    backgroundColor: '#350a6f',
    paddingVertical: 13,
    marginVertical: 12,
  },
});
