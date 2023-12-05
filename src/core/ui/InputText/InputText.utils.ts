import { DefaultTheme } from 'styled-components/native';

import { InputStatus } from './InputText.types';

export const getInputStatus = (theme: DefaultTheme, status: InputStatus) => {
  const STATUS = {
    error: theme.pallete.error.main,
    focus: theme.pallete.common.black,
    default: theme.pallete.grey[300],
  };
  return STATUS[status];
};

export const getLabelStatus = (theme: DefaultTheme, status: InputStatus) => {
  const STATUS = {
    error: theme.pallete.error.main,
    focus: theme.pallete.common.black,
    default: theme.pallete.grey[500],
  };
  return STATUS[status];
};

export const getHelperLabelStatus = (
  theme: DefaultTheme,
  status: InputStatus,
) => {
  const STATUS = {
    error: theme.pallete.error.main,
    focus: theme.pallete.grey[500],
    default: theme.pallete.grey[500],
  };
  return STATUS[status];
};
