import React, {
  ForwardedRef,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  NativeSyntheticEvent,
  StyleProp,
  TextStyle,
  ViewProps,
} from 'react-native';

import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useTheme } from 'styled-components/native';

import { ColorVariant } from '@core/theme';
import DateUtils from '@core/utils/DateUtils';

import * as S from './InputBase.style';
import { InputBaseChildrenProps, RefElement } from './InputBase.types';

import Container from '../Container';

export const defaultInputEvent: NativeSyntheticEvent<{ target: number }> = {
  nativeEvent: {
    target: 0,
  },
  currentTarget: 0,
  target: 0,
  bubbles: false,
  cancelable: false,
  defaultPrevented: false,
  eventPhase: 0,
  isTrusted: false,
  preventDefault: function (): void {
    throw new Error('Function not implemented.');
  },
  isDefaultPrevented: function (): boolean {
    throw new Error('Function not implemented.');
  },
  stopPropagation: function (): void {
    throw new Error('Function not implemented.');
  },
  isPropagationStopped: function (): boolean {
    throw new Error('Function not implemented.');
  },
  persist: function (): void {
    throw new Error('Function not implemented.');
  },
  timeStamp: 0,
  type: '',
};

export type InputBaseProps<T> = InputBaseChildrenProps<T> & {
  label?: string;
  helperText?: string;
  color?: ColorVariant;
  error?: boolean;
  required?: boolean;
  icon?: JSX.Element;
  style?: ViewProps['style'];
  focusable?: boolean;
  autoFocus?: boolean;
  sx?: {
    label: StyleProp<TextStyle>;
    input: StyleProp<TextStyle>;
    adorment: StyleProp<TextStyle>;
  };
  children: (input: InputBaseChildrenProps<T>) => JSX.Element;
};

const AnimatedLabel = Animated.createAnimatedComponent(S.Label);

const InputText = <T extends {}>(
  {
    label,
    onFocus,
    onBlur,
    placeholder,
    color = 'primary',
    helperText,
    error = false,
    required,
    style,
    sx,
    icon,
    onChangeText,
    children,
    focusable,
    autoFocus,
    value,
    ...props
  }: InputBaseProps<T>,
  parentRef: React.ForwardedRef<RefElement>,
) => {
  const theme = useTheme();
  const ref = useRef<RefElement>();
  const touched = useSharedValue(0);
  const shake = useSharedValue(0);
  const [focus, setFocus] = useState(Boolean(focusable && autoFocus));

  const handleOnFocus: InputBaseChildrenProps<T>['onFocus'] = e => {
    setFocus(true);
    onFocus?.(e);
  };

  const handleOnBlur: InputBaseChildrenProps<T>['onBlur'] = e => {
    setFocus(false);
    onBlur?.(e);
  };

  const handleOnPress = () => {
    ref.current?.focus();
  };

  useImperativeHandle(parentRef, () => ({
    focus: handleOnPress,
  }));

  const HAS_CONTENT = useMemo(() => {
    if (value === undefined || value === null) return false;
    if (typeof value === 'number') return !isNaN(value);
    if (typeof value === 'string') return value && value.length > 0;
    return DateUtils.fromDate(value as unknown as Date).isValid;
  }, [value]);

  useEffect(() => {
    touched.value = withTiming(focus || HAS_CONTENT ? 1 : 0, {
      duration: 100,
      easing: Easing.inOut(Easing.ease),
    });
  }, [focus, touched, HAS_CONTENT]);

  useEffect(() => {
    shake.value =
      error && helperText
        ? withTiming(3, { duration: 400, easing: Easing.bounce }, () => {
            shake.value = 0;
          })
        : 0;
  }, [shake, error, helperText]);

  const status = error ? 'error' : focus ? 'focus' : 'default';

  const rLabelStyled = useAnimatedStyle(() => {
    const fontSize = interpolate(touched.value, [0, 1], [14, 11]);
    const translate = interpolate(touched.value, [0, 1], [0, -16]);
    return {
      fontSize: fontSize,
      transform: [{ translateY: translate }],
    };
  });

  const rErroStyled = useAnimatedStyle(() => {
    const translateX = interpolate(
      shake.value,
      [0, 0.5, 1, 1.5, 2, 2.5, 3],
      [0, -10, 0, 10, 0, -10, 0],
    );
    return {
      transform: [
        {
          translateX,
        },
      ],
    };
  });

  return (
    <Animated.View style={[rErroStyled, style]}>
      <S.Container status={status} activeOpacity={1} onPress={handleOnPress}>
        <S.InputContainer>
          {label && (
            <AnimatedLabel
              color={color}
              status={status}
              style={[sx?.label, rLabelStyled]}>
              {label}
              {required ? '*' : ''}
            </AnimatedLabel>
          )}
          {children({
            ref: ref as React.Ref<RefElement>,
            style,
            placeholderTextColor: theme.pallete.grey[400],
            onFocus: handleOnFocus,
            onBlur: handleOnBlur,
            placeholder,
            onChangeText,
            value,
            ...props,
          })}
        </S.InputContainer>
        {icon && (
          <Container justifyContent="center" alignItems="center" p={1}>
            {icon}
          </Container>
        )}
      </S.Container>
      {helperText && <S.HelperText status={status}>{helperText}</S.HelperText>}
    </Animated.View>
  );
};

export default forwardRef(InputText) as <T>(
  props: InputBaseProps<T>,
  ref: ForwardedRef<RefElement>,
) => ReturnType<typeof InputText>;
