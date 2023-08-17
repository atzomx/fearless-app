import React, { FC, PropsWithChildren } from 'react';
import { StatusBar } from 'react-native';

import { useTheme } from 'styled-components/native';

import LogoIcon from '@core/icons/LogoIcon';
import { ScrollLayout } from '@core/layouts';

import * as S from './LogoLayout.styled';

const LogoLayout: FC<PropsWithChildren> = ({ children }) => {
  const theme = useTheme();
  return (
    <ScrollLayout>
      <S.Container>
        <StatusBar translucent backgroundColor={theme.pallete.primary.main} />
        <S.LogoContainer>
          <LogoIcon />
        </S.LogoContainer>
        <S.BottomContainer>{children}</S.BottomContainer>
      </S.Container>
    </ScrollLayout>
  );
};

export default LogoLayout;
