import { IRoute } from '@core/interfaces/IRoutes';

import ROUTES from '../constants/routes';
import { NotificationScreen } from '../screens';

const NotificationRoutes: IRoute[] = [
  {
    key: ROUTES.notification,
    component: NotificationScreen,
    options: { headerShown: false },
  },
];

export default NotificationRoutes;
