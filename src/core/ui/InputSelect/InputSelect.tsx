import React, { PropsWithChildren } from 'react';

import Select from './Select';

import InputBase, { InputBaseProps } from '../InputBase';
import Option from './Option';

type InputSelectProps<T> = PropsWithChildren<
  Omit<InputBaseProps<T>, 'children'>
>;

function InputSelect<T>({ children, ...props }: InputSelectProps<T>) {
  return (
    <InputBase {...props}>
      {({
        onBlur,
        onChangeText,
        onFocus,
        placeholder,
        placeholderTextColor,
        ref,
        style,
        value,
      }) => (
        <Select
          onBlur={onBlur}
          onFocus={onFocus}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          ref={ref}
          style={style}
          value={value}>
          {children}
        </Select>
      )}
    </InputBase>
  );
}

export default InputSelect;
