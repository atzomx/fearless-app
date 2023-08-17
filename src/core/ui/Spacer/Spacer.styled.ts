import styled from 'styled-components/native';

export const Spacer = styled.View<{ spacing: number }>(({ spacing }) => ({
  height: 8 * spacing,
}));
