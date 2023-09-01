import React from 'react';
import { StatusBar } from 'react-native';

import { useTheme } from 'styled-components/native';

import { SafeLayout } from '@core/layouts';
import { Text, Button } from '@core/ui';

import * as S from './StartScreen.styled';

const StartScreen = () => {
  const theme = useTheme();
  return (
    <SafeLayout>
      <S.Container>
        <StatusBar translucent backgroundColor={theme.pallete.primary.main} />
        <Text align="center" color="white" variant="h1">
          Selyz
        </Text>
        <Button title="Hola" color="primary" variant="contained" />
        <Button title="Hola" color="primary" variant="outlined" />
        <Button title="Hola" color="secondary" variant="contained" />
        <Button title="Hola" color="secondary" variant="outlined" />
      </S.Container>
    </SafeLayout>
  );
};

export default StartScreen;
