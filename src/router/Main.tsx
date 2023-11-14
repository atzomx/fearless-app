/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components/native';

import { HomeIcon, PlusIcon, ProfileIcon, SettingsIcon } from '@core/icons';
import { DealsScreen } from '@e/deals/screens';

import DealRouter from './Deal';

const ICONS = {
  Home: HomeIcon,
  Claims: HomeIcon,
  Settings: SettingsIcon,
  DealRoute: PlusIcon,
  Profile: ProfileIcon,
};

const Tab = createBottomTabNavigator();

const MainRouter = () => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: [
          styles.bar,
          { backgroundColor: theme.pallete.colors.white },
        ],
        tabBarIcon({ focused }) {
          const Icon = ICONS[route.name as keyof typeof ICONS];
          const color = theme.pallete.grey[focused ? 800 : 400];
          const colorLine = focused
            ? theme.pallete.grey[800]
            : theme.pallete.common.white;

          if (route.name === 'DealRoute')
            return (
              <View
                style={[
                  styles.addButton,
                  { backgroundColor: theme.pallete.common.black },
                ]}>
                <Icon width={22} height={22} color={color} />
              </View>
            );

          return (
            <>
              <Icon width={22} height={22} color={color} />
              {focused && (
                <View style={[styles.dot, { backgroundColor: colorLine }]} />
              )}
            </>
          );
        },
      })}>
      <Tab.Screen name="Home" component={DealsScreen} />
      <Tab.Screen name="Claims" component={DealsScreen} />
      <Tab.Screen name="DealRoute" component={DealRouter} />
      <Tab.Screen name="Settings" component={DealsScreen} />
      <Tab.Screen name="Profile" component={DealsScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  bar: {
    height: 56,
    elevation: 0,
    borderTopWidth: 0,
  },
  dot: {
    marginTop: 3,
    width: 3,
    height: 3,
    borderRadius: 2,
  },
  addButton: {
    width: 42,
    height: 42,
    borderRadius: 42 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MainRouter;
