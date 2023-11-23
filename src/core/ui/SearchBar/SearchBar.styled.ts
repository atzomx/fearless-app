import styled from 'styled-components/native';

export const Container = styled.View(({ theme }) => ({
  flexDirection: 'row',
  height: theme.spacing(5),
  borderRadius: theme.spacing(5 / 3),
  backgroundColor: theme.pallete.grey[50],
  alignItems: 'center',
  paddingHorizontal: theme.spacing(1),
  flex: 1,
}));

export const IconContainer = styled.View(({ theme }) => ({
  width: theme.spacing(3.75),
}));

export const Input = styled.TextInput({
  flex: 1,
  padding: 0,
  margin: 0,
  fontSize: 12,
});
