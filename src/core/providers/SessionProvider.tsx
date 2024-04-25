import React, { PropsWithChildren } from 'react';

import { SessionContext } from '@core/context';
import { useUserMeQuery } from '@core/graphql';
import client from '@core/graphql/apollo.client';
import { useNavigate } from '@core/hooks';
import Session from '@core/utils/Session';

import AUTH_ROUTES from '@e/auth/constants/routes';

const SessionProvider = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate();

  const logOut = async () => {
    await Session.destroy();
    await client.clearStore();
    navigate.replace(AUTH_ROUTES.base);
  };

  const { data, loading } = useUserMeQuery({
    onError() {
      logOut();
    },
  });

  if (!data && loading) return null;

  return (
    <SessionContext.Provider value={{ user: data?.userMe, logOut }}>
      {children}
    </SessionContext.Provider>
  );
};

export default SessionProvider;
