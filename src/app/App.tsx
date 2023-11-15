import * as React from 'react';

import { GlobalProvider } from '@core/providers';

import RootRouter from '../router';

const App = () => {
  return (
    <GlobalProvider>
      <RootRouter />
    </GlobalProvider>
  );
};

export default App;
