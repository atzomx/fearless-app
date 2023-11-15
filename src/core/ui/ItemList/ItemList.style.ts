import styled from 'styled-components/native';

export const IconContainer = styled.View<{ color: string }>(({ color }) => ({
  backgroundColor: color,
  borderRadius: 8,
  height: 36,
  width: 36,
  justifyContent: 'center',
  alignItems: 'center',
}));
