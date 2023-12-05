import React, { FC } from 'react';
import {
  ButtonProps as ButtonPropsRN,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';

import type { ButtonVariant } from '@core/theme/types';

import * as S from './IconButton.style';

import ButtonBase from '../ButtonBase';

export type IconButtonProps = Omit<ButtonPropsRN, 'title'> & {
  variant?: ButtonVariant;
  style?: StyleProp<ViewStyle>;
  disable?: boolean;
  color?: string;
  children?: React.ReactNode;
  sx?: {
    button?: StyleProp<TextStyle>;
    icon?: StyleProp<TextStyle>;
  };
};

const IconButton: FC<IconButtonProps> = ({
  variant = 'contained',
  color = 'primary',
  disable = false,
  onPress,
  style,
  sx,
  children,
  ...props
}) => {
  return (
    <ButtonBase style={style}>
      {({ fadeIn, fadeOut }) => (
        <S.Button
          onPressIn={fadeIn}
          onPressOut={fadeOut}
          variant={variant}
          color={color}
          disable={disable}
          onPress={disable ? undefined : onPress}
          style={sx?.button}
          {...props}>
          {children}
        </S.Button>
      )}
    </ButtonBase>
  );
};

export default IconButton;
