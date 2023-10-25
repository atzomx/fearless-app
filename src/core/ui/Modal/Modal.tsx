import React, { FC, PropsWithChildren, useEffect } from 'react';
import { Dimensions, Modal as RNModal } from 'react-native';

import {
  GestureHandlerRootView,
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  interpolateColor,
  measure,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedRef,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useTheme } from 'styled-components/native';

import * as S from './Modal.style';

import Container from '../Container';
import Text from '../Text';

type ModalProps = PropsWithChildren & {
  open: boolean;
  onClose: () => void;
  title?: string;
};

type TContext = { translateX: number; translateY: number };

const AnimatedModal = Animated.createAnimatedComponent(S.Modal);
const AnimatedBackdrop = Animated.createAnimatedComponent(S.Container);
const AnimatedLine = Animated.createAnimatedComponent(S.Line);
const AnimatedDrag = Animated.createAnimatedComponent(S.GestureContainer);

let INITIAL_POSITION = Dimensions.get('screen').height;
const Modal: FC<ModalProps> = ({ open, onClose, title, children }) => {
  const theme = useTheme();
  const translateY = useSharedValue(0);
  const holding = useSharedValue(0);
  const aref = useAnimatedRef();

  const panGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    TContext
  >({
    onStart: (_, context) => {
      context.translateY = translateY.value;
      holding.value = withTiming(1, { duration: 100 });
    },
    onActive: (event, context) => {
      const position = event.translationY + context.translateY;
      translateY.value = position < 0 ? 0 : position;
    },
    onEnd: event => {
      holding.value = withTiming(0, { duration: 100 });

      const distance = event.translationY;
      const elementSizes = measure(aref);
      const elementHeigth = elementSizes
        ? elementSizes.height
        : INITIAL_POSITION;

      if (distance < elementHeigth / 2) {
        translateY.value = withTiming(0);
        return;
      }

      translateY.value = withTiming(INITIAL_POSITION, { duration: 300 }, () => {
        runOnJS(onClose)();
      });
    },
    onFinish: () => {
      holding.value = withTiming(0, { duration: 100 });
    },
  });

  const handleOnClose = () => {
    'worklet';
    translateY.value = withTiming(
      INITIAL_POSITION,
      {
        duration: 300,
      },
      () => {
        runOnJS(onClose)();
      },
    );
  };

  useEffect(() => {
    if (open) translateY.value = withTiming(0, { duration: 300 });
  }, [open, translateY]);

  const rBottomSheetStyle = useAnimatedStyle(() => {
    return { transform: [{ translateY: translateY.value }] };
  }, []);

  const rHoldStyle = useAnimatedStyle(() => {
    const color = interpolateColor(
      holding.value,
      [0, 1],
      [theme.pallete.grey[200], theme.pallete.grey[500]],
    );
    return { backgroundColor: color };
  }, []);

  return (
    <RNModal
      transparent
      animationType="none"
      visible={open}
      onRequestClose={handleOnClose}>
      <AnimatedBackdrop activeOpacity={1} onPress={handleOnClose}>
        <GestureHandlerRootView>
          <AnimatedModal
            ref={aref}
            style={rBottomSheetStyle}
            onStartShouldSetResponder={() => true}>
            <PanGestureHandler onGestureEvent={panGestureEvent}>
              <AnimatedDrag>
                <AnimatedLine style={[rHoldStyle]} />
              </AnimatedDrag>
            </PanGestureHandler>
            <Container pb={2}>
              {title && (
                <Text align="center" fontWeight="Medium" fontSize={14}>
                  {title}
                </Text>
              )}
              {children}
            </Container>
          </AnimatedModal>
        </GestureHandlerRootView>
      </AnimatedBackdrop>
    </RNModal>
  );
};

export default Modal;
