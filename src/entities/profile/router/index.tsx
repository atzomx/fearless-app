import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { useNavigate } from '@core/hooks';

import ProfileRoutes from './routes';

const Stack = createStackNavigator();

const ProfileRouter = () => {
  useNavigate({
    options: {
      tabBarStyle: { display: 'none' },
      presentation: 'modal',
    },
  });

  return (
    <Stack.Navigator>
      {Object.values(ProfileRoutes).map(route => (
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
export default ProfileRouter;
