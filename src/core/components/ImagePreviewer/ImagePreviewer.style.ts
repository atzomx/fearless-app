import styled from 'styled-components/native';

export const ImageContainer = styled.TouchableOpacity(({ theme }) => ({
  width: theme.spacingSingle(8),
  height: theme.spacingSingle(8),
}));

export const Image = styled.Image(({ theme }) => ({
  borderRadius: theme.spacingSingle(1),
  width: theme.spacingSingle(8),
  height: theme.spacingSingle(8),
  resizeMode: 'cover',
}));

export const More = styled.TouchableOpacity(({ theme }) => ({
  borderRadius: theme.spacingSingle(1),
  width: theme.spacingSingle(8),
  height: theme.spacingSingle(8),
  backgroundColor: theme.palette.grey[200],
  borderColor: theme.palette.common.black,
  borderStyle: 'solid',
  borderWidth: 1,
  justifyContent: 'center',
  alignItems: 'center',
}));
