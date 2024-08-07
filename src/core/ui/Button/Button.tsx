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
import Loading from '../Loading';

export type ButtonProps = ButtonPropsRN & {
  title: string;
  fullWidth?: boolean;
  variant?: ButtonVariant;
  color?: ColorVariant;
  style?: StyleProp<ViewStyle>;
  disable?: boolean;
  sx?: {
    button?: StyleProp<TextStyle>;
    text?: StyleProp<TextStyle>;
  };
  startAdorment?: JSX.Element;
  endAdorment?: JSX.Element;
  loading?: boolean;
};

const Button: FC<ButtonProps> = ({
  title,
  fullWidth = false,
  variant = 'contained',
  color = 'primary',
  disable = false,
  onPress,
  style,
  startAdorment,
  endAdorment,
  sx,
  loading,
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
          disabled={disable}
          onPress={disable || loading ? undefined : onPress}
          style={sx?.button}
          {...props}>
          {startAdorment}
          {loading ? (
            <Loading />
          ) : (
            <S.Text
              style={sx?.text}
              color={color}
              variant={variant}
              disabled={disable}>
              {title}
            </S.Text>
          )}
          {endAdorment}
        </S.Button>
      )}
    </ButtonBase>
  );
};

export default Button;
