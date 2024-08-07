import React, { FC, useLayoutEffect } from 'react';
import { Dimensions, Keyboard, Modal as RNModal } from 'react-native';

import {
  GestureHandlerRootView,
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  interpolate,
  interpolateColor,
  measure,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedRef,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { CSSObject } from 'styled-components';
import { useTheme } from 'styled-components/native';

import * as S from './Modal.style';

import Container from '../Container';
import Text from '../Text';

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  style?: CSSObject;
  children:
    | React.ReactNode
    | ((props: { animatedClose: () => void }) => JSX.Element);
};

type TContext = { translateX: number; translateY: number };

const AnimatedModal = Animated.createAnimatedComponent(S.Modal);
const AnimatedBackdrop = Animated.createAnimatedComponent(S.Backdrop);
const AnimatedLine = Animated.createAnimatedComponent(S.Line);
const AnimatedDrag = Animated.createAnimatedComponent(S.GestureContainer);

const INITIAL_POSITION = Dimensions.get('screen').height;

const Modal: FC<ModalProps> = ({ open, onClose, title, children, style }) => {
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

      translateY.value = withTiming(INITIAL_POSITION, { duration: 200 }, () => {
        runOnJS(onClose)();
      });
    },
    onFinish: () => {
      holding.value = withTiming(0, { duration: 100 });
    },
  });

  const handleOnClose = () => {
    'worklet';
    const isKeyboardVisible = Keyboard.isVisible();
    if (isKeyboardVisible) Keyboard.dismiss();

    translateY.value = withTiming(
      INITIAL_POSITION,
      {
        duration: 200,
      },
      () => {
        runOnJS(onClose)();
      },
    );
  };

  useLayoutEffect(() => {
    if (open) translateY.value = withTiming(0, { duration: 300 });
  }, [open, translateY]);

  useLayoutEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => {
      const metrics = Keyboard.metrics();
      translateY.value = -(metrics?.height ?? 0);
    });
    return () => {
      Keyboard.removeAllListeners('keyboardDidShow');
    };
  }, [translateY]);

  const rBottomSheetStyle = useAnimatedStyle(() => {
    return { transform: [{ translateY: translateY.value }] };
  }, []);

  const rHoldStyle = useAnimatedStyle(() => {
    const color = interpolateColor(
      holding.value,
      [0, 1],
      [theme.palette.grey[200], theme.palette.grey[500]],
    );
    return { backgroundColor: color };
  }, []);

  const rBackdropStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      translateY.value,
      [INITIAL_POSITION, 0],
      [0, 1],
    );
    return { opacity };
  });

  return (
    <RNModal
      transparent
      animationType="none"
      visible={open}
      statusBarTranslucent
      presentationStyle="overFullScreen"
      onRequestClose={handleOnClose}>
      <S.Container>
        <S.BackdropPressable onPress={handleOnClose}>
          <AnimatedBackdrop style={rBackdropStyle} />
        </S.BackdropPressable>
        <GestureHandlerRootView>
          <AnimatedModal ref={aref} style={[rBottomSheetStyle, style]}>
            <PanGestureHandler onGestureEvent={panGestureEvent}>
              <AnimatedDrag>
                <AnimatedLine style={rHoldStyle} />
                {title && (
                  <Container pt={2}>
                    <Text align="center" fontWeight="Medium" fontSize={14}>
                      {title}
                    </Text>
                  </Container>
                )}
              </AnimatedDrag>
            </PanGestureHandler>
            <Container pb={2}>
              {typeof children === 'function'
                ? children({ animatedClose: handleOnClose })
                : children}
            </Container>
          </AnimatedModal>
        </GestureHandlerRootView>
      </S.Container>
    </RNModal>
  );
};

export default Modal;
