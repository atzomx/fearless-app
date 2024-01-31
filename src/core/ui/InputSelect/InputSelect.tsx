import React, { FC, PropsWithChildren } from 'react';

import Select from './Select';

import InputBase, { InputBaseProps } from '../InputBase';

type InputSelectProps = PropsWithChildren<Omit<InputBaseProps, 'children'>>;

const InputSelect: FC<InputSelectProps> = ({ children, ...props }) => {
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
};

export default InputSelect;
