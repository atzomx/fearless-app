import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from 'styled-components/native';

import AUTH_ROUTES from '@e/auth/constants/routes';
import LoginRoutes from '@e/auth/routes';
import ChatRoutes from '@e/chats/routes';

const Stack = createStackNavigator();

const ROUTES = [...LoginRoutes, ...ChatRoutes];

const RootRouter = () => {
  const theme = useTheme();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={AUTH_ROUTES.start}
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
