import styled from 'styled-components/native';

export const IconContainer = styled.TouchableOpacity(({ theme }) => ({
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.pallete.grey[100],
  height: theme.spacing(3.75),
  width: theme.spacing(3.75),
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: theme.pallete.grey[100],
  borderRadius: theme.spacing(1),
}));

export const Container = styled.TouchableOpacity({
  flex: 1,
  flexDirection: 'row',
  gap: 10,
});
