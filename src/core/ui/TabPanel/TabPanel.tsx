/* eslint-disable react-native/no-inline-styles */
import React, { FC } from 'react';
import { View } from 'react-native';

type TabPanelProps = React.PropsWithChildren & { value: number; index: number };

const TabPanel: FC<TabPanelProps> = ({ value, index, children }) => {
  return (
    <View style={{ display: value === index ? 'flex' : 'none' }}>
      {children}
    </View>
  );
};

export default TabPanel;
