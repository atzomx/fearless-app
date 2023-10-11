import React, { FC, useMemo, useCallback } from 'react';
import { View, ViewProps, StyleProp, ViewStyle } from 'react-native';

import {
  FlexAlignType,
  FlexStyle,
} from 'react-native/Libraries/StyleSheet/StyleSheetTypes';
import { useTheme } from 'styled-components/native';

import { ISpacingContainer } from '@core/interfaces';
import { createSpacingStyle } from '@core/utils/createSpacingStyle';

type ContainerProps = React.PropsWithChildren &
  ISpacingContainer & {
    fullHeight?: boolean;
    fullWidth?: boolean;
    spacing?: number;
    direction?: 'horizontal' | 'vertical';
    spacingArround?: boolean;
    position?: 'absolute' | 'relative';
    alignSelf?: FlexAlignType;
    style?: ViewProps['style'];
  } & Omit<FlexStyle, 'direction'>;

const PARSER_MARGIN = Object.freeze({
  horizontal: 'marginRight',
  vertical: 'marginBottom',
});

const PARSER_DIRECTION = Object.freeze({
  horizontal: 'row',
  vertical: 'column',
});

const Container: FC<ContainerProps> = ({
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
  direction = 'vertical',
  spacingArround = false,
  ...props
}) => {
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
    <View
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
        { ...(direction && { flexDirection: PARSER_DIRECTION[direction] }) },
        style,
      ]}>
      {CHILDREN}
    </View>
  );
};

export default Container;
