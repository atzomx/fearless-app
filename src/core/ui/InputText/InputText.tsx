import React, { FC, useRef, useState } from 'react';
import {
  NativeSyntheticEvent,
  StyleProp,
  TextInput,
  TextInputFocusEventData,
  TextInputProps,
  TextStyle,
} from 'react-native';

import { useTheme } from 'styled-components/native';

import { ColorVariant } from '@core/theme/theme';

import * as S from './InputText.style';

export type InputTextProps = TextInputProps & {
  label?: string | null;
  helperText?: string;
  color?: ColorVariant;
  error?: boolean;
  required?: boolean;
  sx?: {
    label: StyleProp<TextStyle>;
    input: StyleProp<TextStyle>;
    adorment: StyleProp<TextStyle>;
  };
};

const InputText: FC<InputTextProps> = ({
  label,
  onFocus,
  onBlur,
  placeholder,
  color = 'primary',
  helperText,
  error = false,
  required,
  style,
  sx,
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

  const status = error ? 'error' : focus ? 'focus' : 'default';

  return (
    <>
      <S.Container activeOpacity={1} onPress={handleOnPress} style={style}>
        <S.InputAdorment color={color} status={status} style={sx?.adorment} />
        <S.InputContainer>
          <S.Label color={color} status={status} style={sx?.label}>
            {label}
            {required ? '*' : ''}
          </S.Label>
          <S.Input
            ref={ref as React.Ref<TextInput> | undefined}
            style={sx?.input}
            placeholderTextColor={theme.pallete.grey[400]}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            placeholder={placeholder}
            {...props}
          />
        </S.InputContainer>
      </S.Container>
      {helperText && <S.HelperText status={status}>{helperText}</S.HelperText>}
    </>
  );
};

export default InputText;
