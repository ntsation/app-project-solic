import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RequestProvider } from './src/context/RequestContext';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  return (
    <RequestProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </RequestProvider>
  );
};

export default App;
