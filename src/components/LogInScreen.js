import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Form from './Form';
import axios from 'axios';

const LogInScreen = ({ navigation }) => {
  const [loginData, setLoginData] = useState({});

  const handleText = (name, value) => {
    const newLoginData = {
      ...loginData,
      [name]: value,
    };
    setLoginData(newLoginData);
  };
  const handleSubmit = async () => {
    const login = await axios.post(
      'http://localhost:3000/auth/sign-in',
      loginData
    );
    console.log(login);
    if (login.status === 200) {
      navigation.replace('Chat');
    } else {
      // setError()
    }
  };

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
