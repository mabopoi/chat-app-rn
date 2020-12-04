import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Form = (props) => {
  const { signUp, handleText, handleSubmit } = props;

  return (
    <View style={styles.container}>
      {signUp ? (
        <Text style={styles.title}>Sign up!</Text>
      ) : (
        <Text style={styles.title}>Log in!</Text>
      )}
      <Text>Email</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => handleText('email', text)}
      />
      {signUp && (
        <>
          <Text>Username</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleText('username', text)}
          />
        </>
      )}
      <Text>Password</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => handleText('password', text)}
      />
      {signUp && (
        <>
          <Text>Confirm password</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleText('confirmedPassword', text)}
          />
        </>
      )}
      <View style={styles.button}>
        <Button title='Ready' onPress={handleSubmit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 400,
    marginTop: 10,
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 20,
  },
  input: {
    height: 46,
    backgroundColor: 'rgba(255, 242, 242, 0.9)',
    paddingLeft: 16,
    color: '#000',
    borderBottomWidth: 2,
    borderBottomColor: '#000',
  },
  button: {
    marginTop: 30,
    marginLeft: 25,
    padding: 2,
    width: 350,
  },
});

export default Form;
