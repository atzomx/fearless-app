import React, { FC } from 'react';
import {
  ButtonProps as ButtonPropsRN,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';

import { SvgProps } from 'react-native-svg';
import { useTheme } from 'styled-components/native';

import { ButtonVariant, ColorVariant } from '@core/theme/types';

import * as S from './IconButton.style';

import ButtonBase from '../ButtonBase';
import { getContentVariantStyle } from '../ButtonBase/ButtonBase.utils';

export type IconButtonProps = Omit<ButtonPropsRN, 'title' | 'children'> & {
  variant?: ButtonVariant;
  color?: ColorVariant;
  style?: StyleProp<ViewStyle>;
  disable?: boolean;
  icon: (props: SvgProps) => JSX.Element;
  sx?: {
    button: StyleProp<TextStyle>;
    icon: StyleProp<TextStyle>;
  };
};

const IconButton: FC<IconButtonProps> = ({
  variant = 'contained',
  color = 'primary',
  disable = false,
  onPress,
  style,
  icon: Icon,
  ...props
}) => {
  const theme = useTheme();
  return (
    <ButtonBase style={[style]}>
      {({ fadeIn, fadeOut }) => (
        <S.Button
          onPressIn={fadeIn}
          onPressOut={fadeOut}
          variant={variant}
          color={color}
          disable={disable}
          onPress={disable ? undefined : onPress}
          {...props}>
          <Icon
            height={24}
            width={24}
            fill={getContentVariantStyle({ variant, theme, color, disable })}
          />
        </S.Button>
      )}
    </ButtonBase>
  );
};

export default IconButton;
