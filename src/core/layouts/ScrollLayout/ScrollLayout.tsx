/* eslint-disable react-native/no-inline-styles */
import React, { FC } from 'react';

import Animated, {
  AnimatedProps,
  AnimatedScrollViewProps,
} from 'react-native-reanimated';
import { useTheme } from 'styled-components/native';

const ScrollLayout: FC<
  React.PropsWithChildren &
    AnimatedProps<AnimatedScrollViewProps> & {
      p?: number;
      fullHeight?: boolean;
    }
> = ({ children, p = 0, fullHeight = false, ...props }) => {
  const theme = useTheme();
  return (
    <Animated.ScrollView
      {...props}
      contentContainerStyle={{
        padding: theme.spacingSingle(p),
        overflow: 'visible',
        ...(fullHeight && { flex: 1 }),
      }}>
      {children}
    </Animated.ScrollView>
  );
};

export default ScrollLayout;
