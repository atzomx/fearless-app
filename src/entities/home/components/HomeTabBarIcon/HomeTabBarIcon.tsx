import React, { FC } from 'react';

import { SvgProps } from 'react-native-svg';
import { useTheme } from 'styled-components/native';

import * as S from './HomeTabBarIcon.style';

export type HomeTabBarIconProps = {
  focused: boolean;
  icon: (props: SvgProps) => React.JSX.Element;
};

const HomeTabBarIcon: FC<HomeTabBarIconProps> = ({ focused, icon: Icon }) => {
  const theme = useTheme();
  const color = theme.pallete.grey[focused ? 800 : 400];

  return (
    <React.Fragment>
      <Icon width={24} height={24} color={color} />
      {focused && <S.Dot focused={focused} />}
    </React.Fragment>
  );
};

export default HomeTabBarIcon;
