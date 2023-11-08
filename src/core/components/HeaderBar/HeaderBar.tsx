import React, { FC } from 'react';
import { ViewProps } from 'react-native';

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
  title,
  children,
  action,
  ...props
}) => {
  return (
    <S.ContainerView edges={['top']}>
      <S.Container {...props}>
        <S.ContainerBack>
          {onBack && <BackButton onPress={onBack} />}
        </S.ContainerBack>
        <S.ContainerTitle>
          {title && (
            <Text
              fontWeight="SemiBold"
              color="black"
              align="center"
              fontSize={20}>
              {title}
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
