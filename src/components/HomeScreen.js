import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to ChatApp!</Text>
      <Text style={styles.subtitle}>Log In to start chatting</Text>
      <Text style={styles.subtitle}>
        or sign up if you don't have an account
      </Text>
      <View style={styles.buttonLog}>
        <Button
          color='#07E7EE'
          onPress={() => navigation.navigate('Log In')}
          title='Log In'
        />
      </View>
      <View style={styles.buttonSign}>
        <Button
          color='#0754EE'
          title='Sign Up'
          onPress={() => navigation.navigate('Sign Up')}
        />
      </View>
      <StatusBar style='auto' />
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
  title: {
    fontSize: 60,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    textAlign: 'center',
  },
  buttonLog: {
    marginTop: 60,
    padding: 2,
    width: 350,
  },
  buttonSign: {
    margin: 4,
    padding: 2,
    width: 350,
  },
});

export default HomeScreen;
