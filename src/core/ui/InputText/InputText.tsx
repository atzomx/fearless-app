import React, { forwardRef } from 'react';
import { TextInput, TextInputProps } from 'react-native';

import * as S from './InputText.style';

import InputBase, { InputBaseProps, RefElement } from '../InputBase';

type InputTextProps<T> = Omit<InputBaseProps<T>, 'children' | 'ref'> &
  Omit<TextInputProps, 'onChangeText' | 'ref'>;

function InputText(
  { ...props }: InputTextProps<string>,
  parentRef: React.ForwardedRef<RefElement>,
) {
  return (
    <InputBase {...props} ref={parentRef}>
      {({
        ref,
        style,
        onBlur,
        onChangeText,
        onFocus,
        placeholder,
        placeholderTextColor,
        value,
        ...nextProps
      }) => (
        <S.Input
          ref={ref as React.Ref<TextInput>}
          style={style}
          placeholderTextColor={placeholderTextColor}
          onFocus={onFocus}
          onBlur={onBlur}
          placeholder={placeholder}
          onChangeText={onChangeText}
          value={value}
          {...nextProps}
        />
      )}
    </InputBase>
  );
}

export default forwardRef(InputText);
