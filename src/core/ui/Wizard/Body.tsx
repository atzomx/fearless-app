import React, { FC, PropsWithChildren } from 'react';

const Body: FC<PropsWithChildren> = ({ children }) => {
  return <>{children}</>;
};

Body.displayName = 'Wizard.Body';

export default Body;
