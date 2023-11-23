import { BellIcon, HomeIcon, MenuIcon, MessageIcon } from '@core/icons';
import { DealsScreen } from '@e/deals/screens';

import HOME_ROUTES from '../constants/routes';

export const HomeRoutes = {
  [HOME_ROUTES.home]: {
    key: HOME_ROUTES.home,
    icon: HomeIcon,
    component: DealsScreen,
  },
  [HOME_ROUTES.messages]: {
    key: HOME_ROUTES.messages,
    icon: MessageIcon,
    component: DealsScreen,
  },
  [HOME_ROUTES.notifications]: {
    key: HOME_ROUTES.notifications,
    icon: BellIcon,
    component: DealsScreen,
  },
  [HOME_ROUTES.more]: {
    key: HOME_ROUTES.more,
    icon: MenuIcon,
    component: DealsScreen,
  },
};

export type THomeRoutes = keyof typeof HomeRoutes;
