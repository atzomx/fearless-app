import React, { FC } from 'react';
import { TextProps as RNTextProps } from 'react-native';

import { TextVariant, TextColor, AlignText } from '@core/theme/theme';

import * as S from './Text.style';

export type TextProps = RNTextProps & {
  color?: TextColor;
  variant?: TextVariant;
  align?: AlignText;
};

const Text: FC<TextProps> = ({
  color = 'primary',
  variant = 'body1',
  children,
  align = 'left',
  ...props
}) => {
  return (
    <S.Text align={align} color={color} variant={variant} {...props}>
      {children}
    </S.Text>
  );
};

export default Text;
