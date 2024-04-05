import React, { ElementType } from 'react';

import { Control, Path, useController } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { InputBaseProps, InputText } from '@core/ui';

type InputControlCommonProps<D extends ElementType<any>, F extends {}> = Pick<
  InputBaseProps<D>,
  'helperText' | 'error' | 'value' | 'onChangeText' | 'onBlur'
> & {
  control: Control<F, any>;
  name: Path<F>;
  //@ts-ignore
  component?: D;
  //@ts-ignore
} & React.ComponentProps<D>;

function InputControl<D extends ElementType<any>, F extends {}>({
  control,
  name,
  helperText,
  error,
  //@ts-ignore
  component: Component = InputText,
  ...props
}: InputControlCommonProps<D, F>) {
  const { t } = useTranslation();
  const { field, fieldState } = useController({
    control,
    name,
  });

  const errorHelperText = fieldState.error?.message
    ? t(fieldState.error.message)
    : helperText;

  const errorStatus = !!fieldState.error || error;

  return (
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
