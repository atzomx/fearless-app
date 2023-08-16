import { Dimensions } from 'react-native';

import styled from 'styled-components/native';

const { height: HEIGHT, width: WIDTH } = Dimensions.get('window');

export const Container = styled.View(({ theme }) => ({
  flex: 1,
  position: 'relative',
  height: HEIGHT,
  backgroundColor: theme.pallete.primary.main,
}));

export const LogoContainer = styled.View(() => ({
  width: WIDTH * 0.5,
  alignSelf: 'center',
  alignItems: 'center',
  flex: 1,
}));

export const BottomContainer = styled.View(({ theme }) => ({
  width: '100%',
  bottom: 0,
  backgroundColor: theme.pallete.common.white,
  padding: 24,
  justifyContent: 'space-around',
  alignItems: 'center',
  borderTopLeftRadius: 50,
  borderTopRightRadius: 50,
}));
