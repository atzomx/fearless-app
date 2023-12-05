import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginRoute from '@e/auth/router';
import DealRouter, { DealsStackOptions } from '@e/deals/router';
import HomeRouter from '@e/home/router';

const Stack = createStackNavigator();

const RootRouter = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="auth"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="auth" component={LoginRoute} />
        <Stack.Screen name="home" component={HomeRouter} />
        <Stack.Screen
          name="deals"
          component={DealRouter}
          options={DealsStackOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootRouter;
