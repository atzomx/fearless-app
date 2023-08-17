import { IRoute } from '@core/interfaces/IRoutes';

import ROUTES from '../constants/routes';
import { ChatsListScreen, ConversationScreen } from '../screens';

const ChatsRoutes: IRoute[] = [
  {
    key: ROUTES.chats,
    component: ChatsListScreen,
    options: { headerShown: false },
  },
  {
    key: ROUTES.conversation,
    component: ConversationScreen,
    options: { headerShown: false },
  },
];

export default ChatsRoutes;
