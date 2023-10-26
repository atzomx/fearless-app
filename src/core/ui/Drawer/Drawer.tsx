import React, { FC, useEffect } from 'react';
import { Dimensions, Modal } from 'react-native';

import Animated, {
  Easing,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import * as S from './Drawer.style';

const { width: SCREEN_WIDTH } = Dimensions.get('screen');
const TIMING_IN = 400;

export type DrawerProps = React.PropsWithChildren & {
  open: boolean;
  onClose: () => void;
};

const AnimatedBackdrop = Animated.createAnimatedComponent(S.Backdrop);

const Drawer: FC<DrawerProps> = ({ open, onClose, children }) => {
  const translateX = useSharedValue(0);

  const handleOnClose = () => {
    'worklet';
    translateX.value = withTiming(
      0,
      { duration: TIMING_IN, easing: Easing.inOut(Easing.quad) },
      () => {
        runOnJS(onClose)();
      },
    );
  };

  const rContainerStyle = useAnimatedStyle(() => {
    const translation = interpolate(
      translateX.value,
      [0, 1],
      [SCREEN_WIDTH, SCREEN_WIDTH * 0.3],
    );
    return {
      transform: [{ translateX: translation }],
    };
  });

  const rBackdropStyle = useAnimatedStyle(() => ({
    opacity: translateX.value,
  }));

  useEffect(() => {
    if (!open) return;
    translateX.value = withTiming(1, {
      duration: TIMING_IN,
      easing: Easing.inOut(Easing.quad),
    });
  }, [open, translateX]);

  return (
    <Modal
      transparent
      animationType="none"
      visible={open}
      statusBarTranslucent
      presentationStyle="overFullScreen"
      onRequestClose={handleOnClose}>
      <AnimatedBackdrop
        activeOpacity={1}
        onPress={handleOnClose}
        style={rBackdropStyle}
      />
      <S.DrawerSheet
        onStartShouldSetResponder={() => true}
        style={rContainerStyle}>
        {children}
      </S.DrawerSheet>
    </Modal>
  );
};

export default Drawer;
