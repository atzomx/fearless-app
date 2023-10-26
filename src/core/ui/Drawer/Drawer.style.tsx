import { Dimensions } from 'react-native';

import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('screen');

export const Backdrop = styled.TouchableOpacity(({ theme }) => ({
  backgroundColor: theme.fade(theme.pallete.common.black, 0.2),
  position: 'absolute',
  height: SCREEN_HEIGHT,
  width: SCREEN_WIDTH,
}));

export const DrawerSheet = styled(Animated.View)(({ theme }) => ({
  width: SCREEN_WIDTH * 0.7,
  backgroundColor: theme.pallete.background,
  borderTopLeftRadius: 30,
  borderBottomLeftRadius: 30,
  elevation: 10,
  borderColor: theme.pallete.grey[200],
  borderWidth: 1,
  borderStyle: 'solid',
  flex: 1,
}));
