import React, { FC } from 'react';
import { ViewProps } from 'react-native';

import { useTheme } from 'styled-components/native';

import { Text } from '@core/ui';

import * as S from './HeaderBar.style';

import BackButton from '../BackButton';

export type HeaderBarProps = React.PropsWithChildren & {
  title?: string;
  subtitle?: string;
  onBack?: () => void;
  action?: React.ReactNode;
};

const HeaderBar: FC<HeaderBarProps & ViewProps> = ({
  onBack,
  subtitle,
  title,
  children,
  action,
  ...props
}) => {
  const theme = useTheme();

  return (
    <S.ContainerView edges={['top']}>
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
        <S.ContainerBack>{action}</S.ContainerBack>
      </S.Container>
      {children}
    </S.ContainerView>
  );
};

export default HeaderBar;
