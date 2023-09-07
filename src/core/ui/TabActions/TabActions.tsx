import React, { FC } from 'react';
import { View } from 'react-native';

export type TabActionsProps = React.PropsWithChildren;

const TabActions: FC<TabActionsProps> = ({ children }) => {
  return <View>{children}</View>;
};

TabActions.displayName = 'TabActions';

export default TabActions;
