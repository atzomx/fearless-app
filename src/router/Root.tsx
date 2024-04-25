import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AUTH_ROUTES from '@e/auth/constants/routes';
import LoginRouter from '@e/auth/router';
import DEALS_ROUTES from '@e/deals/constants/routes';
import DealRouter from '@e/deals/router';
import HOME_ROUTES from '@e/home/constants/routes';
import HomeRouter from '@e/home/router';
import PROFILE_ROUTES from '@e/profile/constants/routes';
import ProfileRouter from '@e/profile/router';

const Stack = createStackNavigator();
const OPTIONS = { headerShown: false };

const RootRouter = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName={HOME_ROUTES.base}
      screenOptions={OPTIONS}>
      <Stack.Group>
        <Stack.Screen name={AUTH_ROUTES.base} component={LoginRouter} />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen name={PROFILE_ROUTES.base} component={ProfileRouter} />
        <Stack.Screen name={HOME_ROUTES.base} component={HomeRouter} />
        <Stack.Screen name={DEALS_ROUTES.base} component={DealRouter} />
      </Stack.Group>
    </Stack.Navigator>
  </NavigationContainer>
);

export default RootRouter;
