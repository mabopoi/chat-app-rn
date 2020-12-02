import React from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

const LogInScreen = () => {
  return (
    <View>
      <Text>Log in!</Text>
      <Text>Email</Text>
      <TextInput />
      <Text>Password</Text>
      <TextInput />
      <Button title='Ready' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  title: {},
  input: {},
  button: {},
});
export default LogInScreen;
