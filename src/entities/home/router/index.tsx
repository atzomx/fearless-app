/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from 'styled-components/native';

import { makeStyles } from '@core/hooks';
import { SessionProvider } from '@core/providers';

import { HomeRoutes, type THomeRoutes } from './routes';
import { HomeTabBarIcon } from '@e/home/components';

const Tab = createBottomTabNavigator();

const HomeRouter = () => {
  const styles = useStyles();
  const insets = useSafeAreaInsets();
  const theme = useTheme();

  return (
    <SessionProvider>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarHideOnKeyboard: true,
          tabBarStyle: [
            styles.tabBarStyle,
            { height: theme.spacingSingle(7) + insets.bottom },
          ],
          tabBarIcon: ({ focused }) => (
            <HomeTabBarIcon
              focused={focused}
              icon={HomeRoutes[route.name as THomeRoutes].icon}
            />
          ),
        })}>
        {Object.values(HomeRoutes).map(({ key, component }) => (
          <Tab.Screen key={key} name={key} component={component} />
        ))}
      </Tab.Navigator>
    </SessionProvider>
  );
};

const useStyles = makeStyles(theme => ({
  tabBarStyle: {
    elevation: 0,
    borderTopWidth: 0,
    backgroundColor: theme.palette.colors.white,
    paddingHorizontal: theme.spacingSingle(6),
  },
}));

export default HomeRouter;
