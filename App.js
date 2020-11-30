import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import InitialStack from './src/components/InitialStack';

export default function App() {
  return (
    <NavigationContainer>
      <InitialStack />
    </NavigationContainer>
  );
}
