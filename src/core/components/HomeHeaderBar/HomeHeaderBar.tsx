import React, { FC } from 'react';

import { useTheme } from 'styled-components/native';

import { Text } from '@core/ui';

import * as S from './HomeHeaderBar.style';

import ProfileButton from '../ProfileButton';

export type HomeHeaderBarProps = {
  name?: string;
};

const HomeHeaderBar: FC<HomeHeaderBarProps> = ({ name }) => {
  const theme = useTheme();
  return (
    <S.ContainerView edges={['top']}>
      <S.Container>
        <S.ContainerTitle>
          <Text
            fontSize={12}
            fontWeight="Regular"
            color={theme.pallete.grey[500]}>
            Bienvenido
          </Text>
          <Text
            fontSize={14}
            fontWeight="Medium"
            color={theme.pallete.text.black}>
            Erick Andrade
          </Text>
        </S.ContainerTitle>
        <S.ContainerButton>
          <ProfileButton />
        </S.ContainerButton>
      </S.Container>
    </S.ContainerView>
  );
};

export default HomeHeaderBar;
