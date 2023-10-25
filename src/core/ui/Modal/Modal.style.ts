import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity(({ theme }) => ({
  flex: 1,
  justifyContent: 'flex-end',
  backgroundColor: theme.fade('#000000', 0.2),
}));

export const Modal = styled.View(({ theme }) => ({
  backgroundColor: theme.pallete.common.white,
  borderTopLeftRadius: theme.spacingSingle(3),
  borderTopRightRadius: theme.spacingSingle(3),
  minHeight: 150,
}));

export const GestureContainer = styled.View(({ theme }) => ({
  paddingTop: theme.spacingSingle(1),
  paddingBottom: theme.spacingSingle(1),
}));

export const Line = styled.View(({ theme }) => ({
  borderRadius: theme.spacingSingle(2),
  width: theme.spacingSingle(5),
  height: theme.spacingSingle(0.5),
  alignSelf: 'center',
}));
