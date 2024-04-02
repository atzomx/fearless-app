import React from 'react';

import { Control, useController } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { InputText, InputBaseProps } from '@core/ui';

type InputControlCommonProps<D> = Pick<
  InputBaseProps<D>,
  'helperText' | 'error' | 'value' | 'onChangeText' | 'onBlur'
> & {
  control: Control<any, any>;
  name: string;
  //@ts-ignore
  component?: D;
  //@ts-ignore
} & React.ComponentProps<D>;

function InputControl<D>({
  control,
  name,
  helperText,
  error,
  //@ts-ignore
  component: Component = InputText,
  ...props
}: InputControlCommonProps<D>) {
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
    //@ts-ignore
    <Component
      {...props}
      error={!!errorStatus}
      value={field.value}
      onChangeText={field.onChange}
      onBlur={field.onBlur}
      helperText={errorHelperText}
    />
  );
}

export default InputControl;
