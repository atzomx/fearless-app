import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { useNavigate } from '@core/hooks';

import LoginRoutes from './routes';

import AUTH_ROUTES from '../constants/routes';

const Stack = createStackNavigator();

const AuthRouter = () => {
  useNavigate({
    options: {
      tabBarStyle: { display: 'none' },
      presentation: 'modal',
    },
  });

  return (
    <Stack.Navigator initialRouteName={AUTH_ROUTES.login}>
      {Object.values(LoginRoutes).map(route => (
        <Stack.Screen
          name={route.key}
          key={route.key}
          component={route.component}
          options={route.options}
        />
      ))}
    </Stack.Navigator>
  );
};

export * from './routes';
export default AuthRouter;
