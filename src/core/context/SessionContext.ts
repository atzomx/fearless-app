import { createContext } from 'react';

import { UserMeQuery } from '@core/graphql';

export default createContext<{
  user: UserMeQuery['userMe'] | undefined;
  logOut: () => Promise<void>;
}>({} as never);
