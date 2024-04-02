import styled from 'styled-components/native';

import { ColorVariant } from '@core/theme';

import { InputStatus } from './InputBase.types';
import {
  getHelperLabelStatus,
  getInputStatus,
  getLabelStatus,
} from './InputBase.utils';

export const Container = styled.TouchableOpacity<{ status: InputStatus }>(
  ({ theme, status }) => ({
    ...theme.components.InputText.container,
    borderColor: getInputStatus(theme, status),
  }),
);

export const InputContainer = styled.View({
  flex: 1,
  justifyContent: 'center',
  position: 'relative',
});

export const Label = styled.Text<{ color: ColorVariant; status: InputStatus }>(
  ({ theme, status }) => ({
    ...theme.components.InputText.label,
    color: getLabelStatus(theme, status),
  }),
);

export const HelperText = styled.Text<{
  status: InputStatus;
}>(({ theme, status }) => ({
  ...theme.components.InputText.helper,
  color: getHelperLabelStatus(theme, status),
}));
