import styled from 'styled-components/native';

export const Container = styled.View(({ theme }) => ({
  flexDirection: 'row',
  marginTop: theme.spacingSingle(2),
  marginLeft: theme.spacingSingle(2),
  marginRight: theme.spacingSingle(2),
}));

export const ContainerButton = styled.View({
  flexBasis: 'auto',
  flexShrink: 0,
  flexGrow: 0,
});

export const ContainerTitle = styled.View({
  flexBasis: 'auto',
  flexShrink: 4,
  flexGrow: 4,
  justifyContent: 'center',
  gap: 0,
});

export const IconButton = styled.TouchableOpacity(({ theme }) => ({
  width: 42,
  height: 42,
  borderRadius: 100,
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: theme.palette.grey[400],
  justifyContent: 'center',
  alignItems: 'center',
}));
