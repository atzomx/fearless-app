import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainRouter from './Main';

const Stack = createStackNavigator();

const RootRouter = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={MainRouter} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootRouter;
