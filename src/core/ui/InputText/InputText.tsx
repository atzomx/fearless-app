import React, { FC, useEffect, useRef, useState, useMemo } from 'react';
import {
  NativeSyntheticEvent,
  StyleProp,
  TextInput,
  TextInputFocusEventData,
  TextInputProps,
  TextStyle,
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

import * as S from './InputText.style';

import Container from '../Container';

export type InputTextProps = TextInputProps & {
  label?: string | null;
  helperText?: string;
  color?: ColorVariant;
  error?: boolean;
  required?: boolean;
  icon?: JSX.Element;
  sx?: {
    label: StyleProp<TextStyle>;
    input: StyleProp<TextStyle>;
    adorment: StyleProp<TextStyle>;
  };
};

const AnimatedLabel = Animated.createAnimatedComponent(S.Label);

const InputText: FC<InputTextProps> = ({
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
  ...props
}) => {
  const theme = useTheme();
  const ref = useRef<TextInput>();
  const touched = useSharedValue(0);
  const shake = useSharedValue(0);
  const [focus, setFocus] = useState(
    Boolean(props.focusable && props.autoFocus),
  );

  const handleOnFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setFocus(true);
    onFocus?.(e);
  };

  const handleOnBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setFocus(false);
    onBlur?.(e);
  };

  const handleOnPress = () => {
    ref.current?.focus();
  };

  const HAS_CONTENT = useMemo(
    () => props.value && props.value.length > 0,
    [props.value],
  );

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
    <Animated.View style={[rErroStyled]}>
      <S.Container
        status={status}
        activeOpacity={1}
        onPress={handleOnPress}
        style={style}>
        <S.InputContainer>
          <AnimatedLabel
            color={color}
            status={status}
            style={[sx?.label, rLabelStyled]}>
            {label}
            {required ? '*' : ''}
          </AnimatedLabel>
          <S.Input
            ref={ref as React.Ref<TextInput>}
            style={[sx?.input]}
            placeholderTextColor={theme.pallete.grey[400]}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            placeholder={placeholder}
            {...props}
          />
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

export default InputText;
