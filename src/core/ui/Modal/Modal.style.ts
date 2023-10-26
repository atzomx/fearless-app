import { Dimensions } from 'react-native';

import styled from 'styled-components/native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('screen');

export const Container = styled.TouchableOpacity({
  flex: 1,
  justifyContent: 'flex-end',
  backgroundColor: 'transparent',
});

export const Backdrop = styled.View(({ theme }) => ({
  backgroundColor: theme.fade(theme.pallete.common.black, 0.2),
  position: 'absolute',
  height: SCREEN_HEIGHT,
  width: SCREEN_WIDTH,
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
