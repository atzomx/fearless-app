/* eslint-disable react-native/no-inline-styles */
import React, { FC } from 'react';
import { ScrollView, ScrollViewProps } from 'react-native';

import { useTheme } from 'styled-components/native';

const ScrollLayout: FC<
  React.PropsWithChildren & ScrollViewProps & { p?: number }
> = ({ children, p = 0, ...props }) => {
  const theme = useTheme();
  return (
    <ScrollView
      {...props}
      contentContainerStyle={{
        padding: theme.spacingSingle(p),
        overflow: 'visible',
      }}>
      {children}
    </ScrollView>
  );
};

export default ScrollLayout;
