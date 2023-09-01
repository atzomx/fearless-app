import React, { FC } from 'react';
import { TextProps as RNTextProps } from 'react-native';

import { TextProps } from './Text.model';
import * as S from './Text.style';

const Text: FC<RNTextProps & TextProps> = ({
  children,
  align = 'left',
  color = 'primary',
  fontSize,
  fontWeight,
  variant = 'body1',
  ...props
}) => {
  return (
    <S.Text
      align={align}
      color={color}
      variant={variant}
      fontWeight={fontWeight}
      fontSize={fontSize}
      {...props}>
      {children}
    </S.Text>
  );
};

export default Text;
