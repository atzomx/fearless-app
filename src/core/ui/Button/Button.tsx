import React, { FC } from 'react';
import {
  ButtonProps as ButtonPropsRN,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';

import { ButtonVariant, ColorVariant } from '@core/theme';

import * as S from './Button.style';

import ButtonBase from '../ButtonBase';

export type ButtonProps = ButtonPropsRN & {
  title: string;
  fullWidth?: boolean;
  variant?: ButtonVariant;
  color?: ColorVariant;
  style?: StyleProp<ViewStyle>;
  disable?: boolean;
  sx?: {
    button: StyleProp<TextStyle>;
    text: StyleProp<TextStyle>;
  };
};

const Button: FC<ButtonProps> = ({
  title,
  fullWidth = false,
  variant = 'contained',
  color = 'primary',
  disable = false,
  onPress,
  style,
  ...props
}) => {
  return (
    <ButtonBase style={[style, { ...(fullWidth ? { width: '100%' } : {}) }]}>
      {({ fadeIn, fadeOut }) => (
        <S.Button
          onPressIn={fadeIn}
          onPressOut={fadeOut}
          variant={variant}
          color={color}
          disable={disable}
          onPress={disable ? undefined : onPress}
          {...props}>
          <S.Text color={color} variant={variant} disable={disable}>
            {title}
          </S.Text>
        </S.Button>
      )}
    </ButtonBase>
  );
};

export default Button;
