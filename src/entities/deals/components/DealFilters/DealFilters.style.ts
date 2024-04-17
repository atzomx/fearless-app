import styled from 'styled-components/native';

export const IconContainer = styled.TouchableOpacity(({ theme }) => ({
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.palette.grey[100],
  height: theme.spacing(5),
  width: theme.spacing(5),
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: theme.palette.grey[100],
  borderRadius: theme.spacing(1),
}));

export const Container = styled.View({
  flex: 1,
  flexDirection: 'row',
  gap: 10,
});
