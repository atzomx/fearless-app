import styled from 'styled-components/native';

import { ColorVariant } from '@core/theme/theme';

import { InputStatus } from './InputText.types';
import {
  getHelperLabelStatus,
  getInputAdormentStatus,
  getLabelStatus,
} from './InputText.utils';

export const Container = styled.TouchableOpacity(({ theme }) => ({
  ...theme.components.InputText.container,
}));

export const InputAdorment = styled.View<{
  color: ColorVariant;
  status: InputStatus;
}>(({ status, color, theme }) => ({
  ...theme.components.InputText.adorment,
  backgroundColor: getInputAdormentStatus(theme, color, status),
}));

export const InputContainer = styled.View(() => ({
  flex: 1,
}));

export const Label = styled.Text<{ color: ColorVariant; status: InputStatus }>(
  ({ theme, color, status }) => ({
    ...theme.components.InputText.label,
    color: getLabelStatus(theme, color, status),
  }),
);

export const Input = styled.TextInput(({ theme }) => ({
  ...theme.components.InputText.input,
  color: theme.pallete.text.primary,
}));

export const HelperText = styled.Text<{
  status: InputStatus;
}>(({ theme, status }) => ({
  ...theme.components.InputText.helper,
  color: getHelperLabelStatus(theme, status),
}));
