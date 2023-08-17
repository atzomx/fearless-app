import { StackNavigationOptions } from '@react-navigation/stack';

export type IRoute = {
  component: () => JSX.Element;
  options: StackNavigationOptions;
  key: string;
};
