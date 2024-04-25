import React, { FC } from 'react';

import { SvgProps } from 'react-native-svg';
import { useTheme } from 'styled-components/native';

import * as S from './TabBarIcon.style';

type TabBarIconProps = {
  focused: boolean;
  icon: React.FC<SvgProps>;
  height?: number;
  width?: number;
};

const TabBarIcon: FC<TabBarIconProps> = ({
  focused,
  height = 20,
  width = 20,
  icon: Icon,
}) => {
  const theme = useTheme();
  return (
    <S.Container focused={focused}>
      <Icon
        height={height}
        width={width}
        fill={focused ? theme.palette.primary.main : theme.palette.common.white}
      />
    </S.Container>
  );
};

export default TabBarIcon;
