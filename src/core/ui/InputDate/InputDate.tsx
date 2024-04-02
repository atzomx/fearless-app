import React, { PropsWithChildren } from 'react';

import DateSelector from './DateSelector';

import InputBase, { InputBaseProps } from '../InputBase';

type InputDateProps<T> = PropsWithChildren<Omit<InputBaseProps<T>, 'children'>>;

const InputDate = ({ ...props }: InputDateProps<Date>) => {
  return (
    <InputBase {...props}>
      {({ ...inputProps }) => <DateSelector {...inputProps} />}
    </InputBase>
  );
};

export default InputDate;
