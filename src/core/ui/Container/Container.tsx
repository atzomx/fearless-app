import React, { forwardRef } from 'react';
import { View, ViewProps } from 'react-native';

import {
  FlexAlignType,
  FlexStyle,
} from 'react-native/Libraries/StyleSheet/StyleSheetTypes';
import { useTheme } from 'styled-components/native';

import { ISpacingContainer } from '@core/interfaces';
import { createSpacingStyle } from '@core/utils/createSpacingStyle';

type ContainerProps<D> = React.PropsWithChildren &
  ISpacingContainer & {
    fullHeight?: boolean;
    fullWidth?: boolean;
    spacing?: number;
    direction?: FlexStyle['flexDirection'];
    position?: 'absolute' | 'relative';
    alignSelf?: FlexAlignType;
    style?: ViewProps['style'];
    component?: D;
  } & Omit<FlexStyle, 'direction'> &
  //@ts-ignore
  React.ComponentProps<D>;

function Container<D>(
  {
    children,
    style,
    p = 0,
    pt = 0,
    pb = 0,
    pr = 0,
    pl = 0,
    pv = 0,
    ph = 0,
    m = 0,
    mt = 0,
    mb = 0,
    mr = 0,
    ml = 0,
    mv = 0,
    mh = 0,
    spacing = 0,
    fullHeight = false,
    fullWidth = false,
    direction = 'column',
    //@ts-ignore
    component: Component = View,
    ...props
  }: ContainerProps<D>,
  ref: D,
) {
  const theme = useTheme();

  return (
    //@ts-ignore
    <Component
      ref={ref}
      style={[
        createSpacingStyle(theme, {
          p,
          pt,
          pb,
          pr,
          pl,
          pv,
          ph,
          m,
          mt,
          mb,
          mr,
          ml,
          mv,
          mh,
        }),
        { ...props },
        { ...(fullHeight && { flex: 1 }) },
        { ...(fullWidth && { width: '100%' }) },
        { ...(direction && { flexDirection: direction }) },
        { ...(spacing && { gap: theme.spacingSingle(spacing) }) },
        style,
      ]}>
      {children}
    </Component>
  );
}

const ForwardedContainer = forwardRef(Container);

export default ForwardedContainer;
