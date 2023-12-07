import React, { FC } from 'react';
import { StyleSheet, Platform } from 'react-native';

import { useKeyboard } from '@core/hooks';

import * as S from './FloatButton.style';

import IconButton, { IconButtonProps } from '../IconButton';

export type FloatButtonProps = React.PropsWithChildren & IconButtonProps;

const FloatButton: FC<FloatButtonProps> = props => {
  const keyboard = useKeyboard();

  if (keyboard) return null;
  return (
    <S.Container>
      <IconButton sx={{ button: styles.button }} {...props} />
    </S.Container>
  );
};

const styles = StyleSheet.create({
  button: {
    ...(Platform.OS === 'android'
      ? { elevation: 7 }
      : {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 3 },
          shadowOpacity: 0.29,
          shadowRadius: 4.65,
        }),
  },
});

export default FloatButton;
