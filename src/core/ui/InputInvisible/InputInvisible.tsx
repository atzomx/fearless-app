import React, { FC, useRef, useState } from 'react';
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputFocusEventData,
} from 'react-native';

import { useTheme } from 'styled-components/native';

import { TextWeight } from '@core/theme';

import * as S from './InputInvisible.style';

import { InputTextProps } from '../InputText';
import Text from '../Text';

export type InputInvisibleProps = InputTextProps & {
  label?: string | null;
  helperText?: string;
  error?: boolean;
  fontSize?: number;
  fontWeight?: TextWeight;
};

const InputInvisible: FC<InputInvisibleProps> = ({
  label,
  helperText,
  placeholder,
  fontSize,
  fontWeight,
  onFocus,
  onBlur,
  error = false,
  color,
  ...props
}) => {
  const theme = useTheme();
  const ref = useRef<TextInput>();
  const [focus, setFocus] = useState(
    Boolean(props.focusable && props.autoFocus),
  );

  const handleOnFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setFocus(true);
    onFocus?.(e);
  };

  const handleOnBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setFocus(false);
    onBlur?.(e);
  };

  const handleOnPress = () => {
    ref.current?.focus();
  };

  return (
    <S.Container activeOpacity={1} onPress={handleOnPress}>
      {label && (
        <Text
          fontWeight="Medium"
          fontSize={14}
          color={
            error ? theme.pallete.error.light : theme.pallete.common.black
          }>
          {label}
        </Text>
      )}
      <S.Input
        focus={focus}
        multiline
        ref={ref as React.Ref<TextInput>}
        placeholderTextColor={theme.pallete.grey[300]}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        {...{ fontSize, fontWeight, placeholder, color, ...props }}
      />
      {helperText && (
        <Text
          variant="caption"
          color={error ? theme.pallete.error.light : undefined}>
          {helperText}
        </Text>
      )}
    </S.Container>
  );
};

export default InputInvisible;
