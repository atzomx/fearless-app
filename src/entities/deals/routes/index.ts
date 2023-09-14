import { StackNavigationOptions } from '@react-navigation/stack';

import { IRoute } from '@core/interfaces/IRoutes';

import ROUTES from '../constants/routes';
import { DealsScreen, NewDealScreen } from '../screens';

const options: StackNavigationOptions = {
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

const DealsRoutes: IRoute[] = [
  {
    key: ROUTES.home,
    component: DealsScreen,
    options,
  },
  {
    key: ROUTES.new,
    component: NewDealScreen,
    options,
  },
];

export default DealsRoutes;
