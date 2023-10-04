import styled from 'styled-components/native';

import IconButton from '../IconButton';

export const Container = styled.TouchableOpacity(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  width: theme.spacingSingle(15),
  height: theme.spacingSingle(15),
  backgroundColor: theme.pallete.grey[50],
  borderWidth: 1,
  borderRadius: theme.spacingSingle(1),
  borderStyle: 'dashed',
  borderColor: theme.pallete.grey[400],
}));

export const ImageContainer = styled.TouchableOpacity(({ theme }) => ({
  position: 'relative',
  width: theme.spacingSingle(15),
  height: theme.spacingSingle(15),
}));

export const Image = styled.Image(({ theme }) => ({
  borderRadius: theme.spacingSingle(1),
  width: theme.spacingSingle(15),
  height: theme.spacingSingle(15),
  resizeMode: 'cover',
}));

export const CloseButton = styled(IconButton)({
  position: 'absolute',
  top: -8,
  right: -8,
});
