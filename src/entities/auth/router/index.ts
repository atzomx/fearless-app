import { IRoute } from '@core/interfaces/IRoutes';

import ROUTES from '../constants/routes';
import {
  SignInScreen,
  StartScreen,
  SignUpScreen,
  RecoveryScreen,
} from '../screens';

const LoginRoutes: IRoute[] = [
  {
    key: ROUTES.login,
    component: SignInScreen,
    options: { headerShown: false },
  },
  {
    key: ROUTES.start,
    component: StartScreen,
    options: { headerShown: false },
  },
  {
    key: ROUTES.signup,
    component: SignUpScreen,
    options: { headerShown: false },
  },
  {
    key: ROUTES.recovery,
    component: RecoveryScreen,
    options: { headerShown: false },
  },
];

export default LoginRoutes;
