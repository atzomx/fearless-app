import { useContext } from 'react';

import { SessionContext } from '@core/context';

const useSession = () => {
  const user = useContext(SessionContext);
  return user;
};

export default useSession;
