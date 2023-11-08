import React, { useCallback, useMemo } from 'react';
import { StyleProp, View, ViewProps, ViewStyle } from 'react-native';

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
    spacingArround?: boolean;
    position?: 'absolute' | 'relative';
    alignSelf?: FlexAlignType;
    style?: ViewProps['style'];
    component?: D;
  } & Omit<FlexStyle, 'direction'> &
  //@ts-ignore
  React.ComponentProps<D>;

const PARSER_MARGIN = Object.freeze({
  row: 'marginRight',
  ['row-reverse']: 'marginRight',
  column: 'marginBottom',
  ['column-reverse']: 'marginBottom',
});

function Container<D>({
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
  spacing = 1,
  fullHeight = false,
  fullWidth = false,
  direction = 'column',
  spacingArround = false,
  //@ts-ignore
  component: Component = View,
  ...props
}: ContainerProps<D>) {
  const theme = useTheme();
  const ArrayChildren = useMemo(
    () => React.Children.toArray(children),
    [children],
  );

  const styleSpacing = useCallback(
    (index: number): StyleProp<ViewStyle> => {
      if (spacingArround)
        return {
          margin: theme.spacingSingle(spacing),
        };
      if (index === ArrayChildren.length - 1) return undefined;

      return {
        [PARSER_MARGIN[direction]]: theme.spacingSingle(spacing),
      };
    },
    [ArrayChildren.length, direction, spacing, theme, spacingArround],
  );

  const CHILDREN = useMemo(() => {
    if (!spacing) return ArrayChildren;
    return ArrayChildren.map((child, index) => (
      <View
        key={`spacing-layout-fragment-${index}`}
        style={styleSpacing(index)}>
        {child}
      </View>
    ));
  }, [ArrayChildren, spacing, styleSpacing]);

  return (
    //@ts-ignore
    <Component
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
        style,
      ]}>
      {CHILDREN}
    </Component>
  );
}

export default Container;
