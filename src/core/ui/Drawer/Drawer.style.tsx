import { Dimensions, Platform } from 'react-native';

import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('screen');

export const Backdrop = styled.TouchableOpacity(({ theme }) => ({
  backgroundColor: theme.fade(theme.palette.common.black, 0.2),
  position: 'absolute',
  height: SCREEN_HEIGHT,
  width: SCREEN_WIDTH,
}));

export const DrawerSheet = styled(Animated.View)(({ theme }) => ({
  width: SCREEN_WIDTH * 0.75,
  backgroundColor: theme.palette.background,
  borderTopLeftRadius: theme.spacingSingle(3),
  borderBottomLeftRadius: theme.spacingSingle(3),
  borderColor: theme.palette.grey[200],
  borderWidth: 1,
  borderStyle: 'solid',
  flex: 1,
  ...(Platform.OS === 'android'
    ? { elevation: '7px' }
    : {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
      }),
}));
