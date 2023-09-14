import React, { FC } from 'react';
import {
  ButtonProps as ButtonPropsRN,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';

import { SvgProps } from 'react-native-svg';
import { useTheme } from 'styled-components/native';

import type { ButtonVariant, ColorVariant } from '@core/theme/types';

import * as S from './IconButton.style';

import ButtonBase from '../ButtonBase';
import { getContentVariantStyle } from '../ButtonBase/ButtonBase.utils';

export type IconButtonProps = Omit<ButtonPropsRN, 'title'> & {
  variant?: ButtonVariant;
  color?: ColorVariant;
  style?: StyleProp<ViewStyle>;
  disable?: boolean;
  icon?: React.ReactNode | ((props: SvgProps) => JSX.Element);
  children?: React.ReactNode;
  sx?: {
    button?: StyleProp<TextStyle>;
    icon?: StyleProp<TextStyle>;
  };
  iconColor?: string;
};

const IconButton: FC<IconButtonProps> = ({
  variant = 'contained',
  color = 'primary',
  disable = false,
  onPress,
  style,
  icon: Icon,
  sx,
  iconColor,
  children,
  ...props
}) => {
  const theme = useTheme();

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
          {typeof Icon === 'function' ? (
            <Icon
              height={18}
              width={18}
              color={
                iconColor ||
                getContentVariantStyle({
                  variant,
                  theme,
                  color,
                  disable,
                })
              }
              style={sx?.icon}
            />
          ) : (
            <>{(Icon as React.ReactNode) || children}</>
          )}
        </S.Button>
      )}
    </ButtonBase>
  );
};

export default IconButton;
