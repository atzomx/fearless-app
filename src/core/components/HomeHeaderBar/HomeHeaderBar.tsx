import React, { FC } from 'react';

import { useTheme } from 'styled-components/native';

import { useSession } from '@core/hooks';
import { Text } from '@core/ui';

import * as S from './HomeHeaderBar.style';

import ProfileButton from '../ProfileButton';

export type HomeHeaderBarProps = React.PropsWithChildren & {
  name?: string;
};

const HomeHeaderBar: FC<HomeHeaderBarProps> = () => {
  const theme = useTheme();
  const { user } = useSession();

  return (
    <S.Container>
      <S.ContainerTitle>
        <Text
          fontSize={12}
          fontWeight="Regular"
          color={theme.palette.grey[500]}>
          Bienvenido
        </Text>
        <Text
          fontSize={14}
          fontWeight="Medium"
          color={theme.palette.text.black}>
          {user?.name}
        </Text>
      </S.ContainerTitle>
      <S.ContainerButton>
        <ProfileButton />
      </S.ContainerButton>
    </S.Container>
  );
};

export default HomeHeaderBar;
