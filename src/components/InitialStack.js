import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Home';

const Stack = createStackNavigator();

const InitialStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='home' component={HomeScreen} />
      {/* <Stack.Screen name='login' component={} />
      <Stack.Screen name='signUp' component={} /> */}
    </Stack.Navigator>
  );
};

export default InitialStack;
