import { IRoute } from '@core/interfaces/IRoutes';

import ROUTES from '../constants/routes';
import { DealsScreen } from '../screens';

const DealsRoutes: IRoute[] = [
  {
    key: ROUTES.home,
    component: DealsScreen,
    options: { headerShown: false },
  },
];

export default DealsRoutes;
