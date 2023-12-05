import { StackNavigationOptions } from '@react-navigation/stack';

import { IRoute } from '@core/interfaces/IRoutes';

import ROUTES from '../constants/routes';
import {
  SignInScreen,
  StartScreen,
  SignUpScreen,
  RecoveryScreen,
} from '../screens';

export const LoginStackOptions: StackNavigationOptions = {
  headerShown: false,
  presentation: 'transparentModal',
};

export const LoginRoutes: Record<string, IRoute> = {
  [ROUTES.login]: {
    key: ROUTES.login,
    component: SignInScreen,
    options: LoginStackOptions,
  },
  [ROUTES.start]: {
    key: ROUTES.start,
    component: StartScreen,
    options: LoginStackOptions,
  },
  [ROUTES.signup]: {
    key: ROUTES.signup,
    component: SignUpScreen,
    options: LoginStackOptions,
  },
  [ROUTES.recovery]: {
    key: ROUTES.recovery,
    component: RecoveryScreen,
    options: LoginStackOptions,
  },
};

export default LoginRoutes;
