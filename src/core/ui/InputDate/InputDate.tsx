import React, { FC, PropsWithChildren } from 'react';

import DateSelector from './DateSelector';

import InputBase, { InputBaseProps } from '../InputBase';

type InputDateProps = PropsWithChildren<Omit<InputBaseProps, 'children'>>;

const InputDate: FC<InputDateProps> = ({ ...props }) => {
  return (
    <InputBase {...props}>
      {({ ...inputProps }) => <DateSelector {...inputProps} />}
    </InputBase>
  );
};

export default InputDate;
