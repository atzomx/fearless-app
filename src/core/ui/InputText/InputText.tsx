import React, { FC } from 'react';
import { TextInput, TextInputProps } from 'react-native';

import * as S from './InputText.style';

import InputBase, { InputBaseProps } from '../InputBase';

const InputText: FC<Omit<InputBaseProps, 'children'> & TextInputProps> = ({
  ...props
}) => {
  return (
    <InputBase {...props}>
      {({
        ref,
        style,
        onBlur,
        onChangeText,
        onFocus,
        placeholder,
        placeholderTextColor,
        value,
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
        />
      )}
    </InputBase>
  );
};

export default InputText;
