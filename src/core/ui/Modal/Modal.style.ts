import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity(({ theme }) => ({
  flex: 1,
  justifyContent: 'flex-end',
  backgroundColor: theme.fade('#000000', 0.2),
}));

export const Modal = styled.View(({ theme }) => ({
  backgroundColor: theme.pallete.common.white,
  borderTopLeftRadius: theme.spacingSingle(2),
  borderTopRightRadius: theme.spacingSingle(2),
  minHeight: 150,
  zIndex: 1000,
}));

export const Line = styled.View(({ theme }) => ({
  backgroundColor: theme.pallete.grey[200],
  borderRadius: theme.spacingSingle(2),
  width: theme.spacingSingle(5),
  height: theme.spacingSingle(0.5),
  alignSelf: 'center',
}));
