import React, { FC } from 'react';
import { ViewProps } from 'react-native';

import { useTheme } from 'styled-components/native';

import { Avatar, Badge, Text } from '@core/ui';

import * as S from './HeaderBar.style';

import BackButton from '../BackButton';

const URL = 'https://avatars.githubusercontent.com/u/43711671?v=4';

export type HeaderBarProps = {
  title?: string;
  subtitle?: string;
  onBack?: () => void;
};

const HeaderBar: FC<HeaderBarProps & ViewProps> = ({
  onBack,
  subtitle,
  title,
  ...props
}) => {
  const theme = useTheme();

  return (
    <S.Container {...props}>
      <S.ContainerBack>
        {onBack && <BackButton onPress={onBack} />}
      </S.ContainerBack>
      <S.ContainerTitle>
        {title && (
          <Text fontWeight="Bold" color="black" align="center" fontSize={12}>
            {title}
          </Text>
        )}
        {subtitle && (
          <Text
            fontWeight="Regular"
            color={theme.pallete.grey['400']}
            align="center"
            fontSize={12}>
            {subtitle}
          </Text>
        )}
      </S.ContainerTitle>
      <Badge value={10} color="secondary" max={9}>
        <Avatar source={{ uri: URL }} size="medium" />
      </Badge>
    </S.Container>
  );
};

export default HeaderBar;
