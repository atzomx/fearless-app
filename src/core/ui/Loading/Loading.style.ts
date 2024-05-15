import styled from 'styled-components/native';

export const Dot = styled.View(({ theme }) => ({
  height: theme.spacingSingle(1),
  width: theme.spacingSingle(1),
  backgroundColor: theme.palette.common.white,
  borderRadius: theme.spacingSingle(1) / 2,
}));
