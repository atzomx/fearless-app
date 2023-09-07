import styled from 'styled-components/native';

export const Spacer = styled.View<{
  spacing: number;
  direction: 'horizontal' | 'vertical';
}>(({ spacing, direction }) => ({
  ...(direction === 'vertical'
    ? { height: 8 * spacing }
    : { width: 8 * spacing }),
}));
