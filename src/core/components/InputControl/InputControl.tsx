import React, { FC } from 'react';

import { useController, Control } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { InputText, InputTextProps } from '@core/ui';

type InputControlProps = InputTextProps & {
  control: Control<any, any>;
  name: string;
};

const InputControl: FC<InputControlProps> = ({
  control,
  name,
  helperText,
  error,
  ...props
}) => {
  const { t } = useTranslation();
  const { field, fieldState } = useController({
    control,
    name,
    defaultValue: '',
  });

  const errorHelperText = fieldState.error?.message
    ? t(fieldState.error.message)
    : helperText;

  const errorStatus = !!fieldState.error || error;

  return (
    <InputText
      {...props}
      error={!!errorStatus}
      value={field.value}
      onChangeText={field.onChange}
      onBlur={field.onBlur}
      helperText={errorHelperText}
    />
  );
};

export default InputControl;
