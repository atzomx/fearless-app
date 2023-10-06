import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity(({ theme }) => ({
  justifyContent: 'center',
  alignItems: 'center',
  height: theme.spacingSingle(8),
  width: theme.spacingSingle(8),
}));
