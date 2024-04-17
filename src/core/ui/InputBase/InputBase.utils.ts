import { DefaultTheme } from 'styled-components/native';

import { InputStatus } from './InputBase.types';

export const getInputStatus = (theme: DefaultTheme, status: InputStatus) => {
  const STATUS = {
    error: theme.palette.error.main,
    focus: theme.palette.common.black,
    default: theme.palette.grey[300],
  };
  return STATUS[status];
};

export const getLabelStatus = (theme: DefaultTheme, status: InputStatus) => {
  const STATUS = {
    error: theme.palette.error.main,
    focus: theme.palette.common.black,
    default: theme.palette.grey[500],
  };
  return STATUS[status];
};

export const getHelperLabelStatus = (
  theme: DefaultTheme,
  status: InputStatus,
) => {
  const STATUS = {
    error: theme.palette.error.main,
    focus: theme.palette.grey[500],
    default: theme.palette.grey[500],
  };
  return STATUS[status];
};
