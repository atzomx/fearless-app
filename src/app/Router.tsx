import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from 'styled-components/native';

import LoginRoutes from '@e/auth/routes';
import ChatRoutes from '@e/chats/routes';
import DEALS_ROUTES from '@e/deals/constants/routes';
import DealsRoutes from '@e/deals/routes';

const Stack = createStackNavigator();

const ROUTES = [...LoginRoutes, ...ChatRoutes, ...DealsRoutes];

const RootRouter = () => {
  const theme = useTheme();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={DEALS_ROUTES.home}
        screenOptions={{
          cardStyle: {
            backgroundColor: theme.pallete.background,
          },
        }}>
        {ROUTES.map(values => (
          <Stack.Screen
            key={values.key}
            name={values.key}
            options={values.options}
            component={values.component}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootRouter;
