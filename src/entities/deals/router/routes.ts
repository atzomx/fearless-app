import { StackNavigationOptions } from '@react-navigation/stack';

import { IRoute } from '@core/interfaces/IRoutes';

import ROUTES from '../constants/routes';
import { DealScreen, NewDealScreen } from '../screens';

export const DealsStackOptions: StackNavigationOptions = {
  headerShown: false,
  presentation: 'card',
  cardStyleInterpolator: ({ current, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
        ],
      },
    };
  },
};

const DealsRoutes: Record<string, IRoute> = {
  [ROUTES.new]: {
    key: ROUTES.new,
    component: NewDealScreen,
    options: DealsStackOptions,
  },
  [ROUTES.one]: {
    key: ROUTES.one,
    component: DealScreen,
    options: DealsStackOptions,
  },
};

export default DealsRoutes;
