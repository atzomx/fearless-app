import React, { FC, useEffect, useMemo, useRef, useState } from 'react';
import { StyleProp, TextStyle, ViewProps } from 'react-native';

import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useTheme } from 'styled-components/native';

import { ColorVariant } from '@core/theme';

import * as S from './InputBase.style';
import { InputBaseChildrenProps, RefElement } from './InputBase.types';

import Container from '../Container';

export type InputBaseProps = InputBaseChildrenProps & {
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
  children: (input: InputBaseChildrenProps) => JSX.Element;
};

const AnimatedLabel = Animated.createAnimatedComponent(S.Label);

const InputText: FC<InputBaseProps> = ({
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
}) => {
  const theme = useTheme();
  const ref = useRef<RefElement>();
  const touched = useSharedValue(0);
  const shake = useSharedValue(0);
  const [focus, setFocus] = useState(Boolean(focusable && autoFocus));

  const handleOnFocus: InputBaseChildrenProps['onFocus'] = e => {
    setFocus(true);
    onFocus?.(e);
  };

  const handleOnBlur: InputBaseChildrenProps['onBlur'] = e => {
    setFocus(false);
    onBlur?.(e);
  };

  const handleOnPress = () => {
    ref.current?.focus();
  };

  const HAS_CONTENT = useMemo(() => value && value.length > 0, [value]);

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

export default InputText;
