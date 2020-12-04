import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import LogInScreen from './LogInScreen';
import SignUpScreen from './SignUpScreen';

const Stack = createStackNavigator();

const InitialStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Log In' component={LogInScreen} />
      <Stack.Screen name='Sign Up' component={SignUpScreen} />
    </Stack.Navigator>
  );
};

export default InitialStack;
