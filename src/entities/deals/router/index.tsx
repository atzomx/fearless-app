import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { useNavigate } from '@core/hooks';

import DealsRoutes, { DealsStackOptions } from './routes';

const Stack = createStackNavigator();

const DealRouter = () => {
  useNavigate({
    options: {
      tabBarStyle: { display: 'none' },
      presentation: 'card',
    },
  });

  return (
    <Stack.Navigator>
      {Object.values(DealsRoutes).map(route => (
        <Stack.Screen
          name={route.key}
          key={route.key}
          component={route.component}
          options={DealsStackOptions}
        />
      ))}
    </Stack.Navigator>
  );
};

export * from './routes';
export default DealRouter;
