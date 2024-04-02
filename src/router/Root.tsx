import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginRouter from '@e/auth/router';
import DealRouter from '@e/deals/router';
import HomeRouter from '@e/home/router';
import ProfileRouter from '@e/profile/router';

const Stack = createStackNavigator();

const RootRouter = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="auth"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="auth" component={LoginRouter} />
        <Stack.Screen name="profile" component={ProfileRouter} />
        <Stack.Screen name="home" component={HomeRouter} />
        <Stack.Screen name="deals" component={DealRouter} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootRouter;
