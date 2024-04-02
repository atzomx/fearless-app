import { BellIcon, HomeIcon, MenuIcon, MessageIcon } from '@core/icons';
import { DealsScreen } from '@e/deals/screens';
import ProfileRouter from '@e/profile/router';

import HOME_ROUTES from '../constants/routes';
import { WelcomeScreen } from '../screens';

export const HomeRoutes = {
  [HOME_ROUTES.home]: {
    key: HOME_ROUTES.home,
    icon: HomeIcon,
    component: WelcomeScreen,
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
    component: ProfileRouter,
  },
};

export type THomeRoutes = keyof typeof HomeRoutes;
