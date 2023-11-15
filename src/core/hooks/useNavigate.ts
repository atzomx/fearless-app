import { useLayoutEffect } from 'react';

import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import type { CompositeNavigationProp } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';

type ProfileScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<any, any>,
  StackNavigationProp<any>
>;

type OptionsNavigator = Parameters<
  ProfileScreenNavigationProp['setOptions']
>[0];

type UseNavigateProps =
  | {
      options?: OptionsNavigator;
    }
  | undefined;

const useNavigate = ({ options }: UseNavigateProps = {}) => {
  const navigator = useNavigation<ProfileScreenNavigationProp>();

  useLayoutEffect(() => {
    if (!options) return;
    navigator.setOptions(options);
  }, [navigator, options]);

  return navigator;
};

export default useNavigate;
