import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

import { useTheme } from 'styled-components/native';

export type SpacingLayoutProps = React.PropsWithChildren & {
  spacing?: number;
  direction?: 'horizontal' | 'vertical';
};

const PARSER = Object.freeze({
  horizontal: 'marginRight',
  vertical: 'marginBottom',
});

const SpacingLayout: React.FC<SpacingLayoutProps> = ({
  children,
  spacing = 0,
  direction = 'vertical',
}) => {
  const theme = useTheme();
  const ArrayChildren = React.Children.toArray(children);

  const styleSpacing = (index: number): StyleProp<ViewStyle> => {
    if (index === ArrayChildren.length - 1) return undefined;
    return {
      [PARSER[direction]]: theme.spacingSingle(spacing),
    };
  };

  return (
    <>
      {ArrayChildren.map((child, index) => (
        <View
          key={`spacing-layout-fragment-${index}`}
          style={styleSpacing(index)}>
          {child}
        </View>
      ))}
    </>
  );
};

export default SpacingLayout;
