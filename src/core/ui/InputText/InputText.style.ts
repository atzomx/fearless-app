import styled from 'styled-components/native';

export const Input = styled.TextInput(({ theme }) => ({
  ...theme.components.InputText.input,
  color: theme.palette.text.primary,
}));
