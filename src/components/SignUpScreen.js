import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Form from './Form';

const SignUpScreen = () => {
  const [signUpData, setSignUpData] = useState({});

  const handleText = (name, value) => {
    const newSignUpData = {
      ...signUpData,
      [name]: value,
    };
    setSignUpData(newSignUpData);
  };

  const handleSubmit = () => {};

  return (
    <View style={styles.container}>
      <Form signUp handleText={handleText} handleSubmit={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SignUpScreen;
