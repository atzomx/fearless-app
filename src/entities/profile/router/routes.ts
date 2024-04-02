import { StackNavigationOptions } from '@react-navigation/stack';

import { IRoute } from '@core/interfaces/IRoutes';

import ROUTES from '../constants/routes';
import { MoreScreen } from '../screens';

export const MoreStackOptions: StackNavigationOptions = {
  headerShown: false,
  presentation: 'transparentModal',
};

export const LoginRoutes: Record<string, IRoute> = {
  [ROUTES.more]: {
    key: ROUTES.more,
    component: MoreScreen,
    options: MoreStackOptions,
  },
};

export default LoginRoutes;
