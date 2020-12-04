import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Form from './Form';

const LogInScreen = () => {
  const [loginData, setLoginData] = useState({});

  const handleText = (name, value) => {
    const newLoginData = {
      ...loginData,
      [name]: value,
    };
    setLoginData(newLoginData);
  };

  const handleSubmit = () => {};

  return (
    <View style={styles.container}>
      <Form handleSubmit={handleSubmit} handleText={handleText} />
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

export default LogInScreen;
