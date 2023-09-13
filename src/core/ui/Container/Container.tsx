import React, { FC } from 'react';
import { View, ViewProps } from 'react-native';

import { useTheme } from 'styled-components/native';

import { ISpacingContainer } from '@core/interfaces';
import { createSpacingStyle } from '@core/utils/createSpacingStyle';

type ContainerProps = React.PropsWithChildren & ViewProps & ISpacingContainer;

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
  ...props
}) => {
  const theme = useTheme();
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
        style,
      ]}
      {...props}>
      {children}
    </View>
  );
};

export default Container;
