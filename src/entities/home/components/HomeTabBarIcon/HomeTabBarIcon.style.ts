import styled from 'styled-components/native';

export const IconContainer = styled.View(({ theme }) => ({
  width: 42,
  height: 42,
  borderRadius: 42 / 2,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.pallete.colors.black,
}));

export const Dot = styled.View<{ focused: boolean }>(({ focused, theme }) => ({
  marginTop: 3,
  width: 3,
  height: 3,
  borderRadius: 2,
  backgroundColor: focused
    ? theme.pallete.grey[800]
    : theme.pallete.common.white,
}));
