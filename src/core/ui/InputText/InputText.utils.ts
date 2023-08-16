import { DefaultTheme } from 'styled-components/native';

import { ColorVariant } from '@core/theme/theme';

import { InputStatus } from './InputText.types';

export const getInputAdormentStatus = (
  theme: DefaultTheme,
  color: ColorVariant,
  status: InputStatus,
) => {
  const STATUS = {
    error: theme.pallete.error.main,
    focus: theme.pallete[color].main,
    default: 'rgba(0,0,0,0)',
  };
  return STATUS[status];
};

export const getLabelStatus = (
  theme: DefaultTheme,
  color: ColorVariant,
  status: InputStatus,
) => {
  const STATUS = {
    error: theme.pallete.error.main,
    focus: theme.pallete[color].main,
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
