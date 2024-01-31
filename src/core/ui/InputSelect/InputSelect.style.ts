import styled from 'styled-components/native';

import Text from '../Text';

export const SelectText = styled(Text)(({ theme }) => ({
  ...theme.components.InputText.input,
}));
