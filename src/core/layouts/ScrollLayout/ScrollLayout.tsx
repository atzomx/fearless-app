/* eslint-disable react-native/no-inline-styles */
import React, { FC } from 'react';
import { ScrollView, ScrollViewProps } from 'react-native';

import { useTheme } from 'styled-components/native';

const ScrollLayout: FC<
  React.PropsWithChildren &
    ScrollViewProps & { p?: number; fullHeight?: boolean }
> = ({ children, p = 0, fullHeight = false, ...props }) => {
  const theme = useTheme();
  return (
    <ScrollView
      {...props}
      contentContainerStyle={{
        padding: theme.spacingSingle(p),
        overflow: 'visible',
        ...(fullHeight && { flex: 1 }),
      }}>
      {children}
    </ScrollView>
  );
};

export default ScrollLayout;
