import React, { FC, useEffect } from 'react';

import Animated, {
  Easing,
  Extrapolate,
  SharedValue,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

import * as S from './Loading.style';

import Container from '../Container';

type DotProps = {
  dot: SharedValue<number>;
  index: number;
};

const AnimatedDot = Animated.createAnimatedComponent(S.Dot);

const Dot: FC<DotProps> = ({ dot, index }) => {
  const style = useAnimatedStyle(() => {
    const inputRange = [index - 1, index, index + 1];
    const scale = interpolate(
      dot.value,
      inputRange,
      [1, 1.8, 1],
      Extrapolate.CLAMP,
    );
    const opacity = interpolate(
      dot.value,
      inputRange,
      [0.5, 1, 0.5],
      Extrapolate.CLAMP,
    );
    return {
      transform: [{ scale }],
      opacity,
    };
  });
  return <AnimatedDot style={style} />;
};

const Loading = () => {
  const bounce = useSharedValue(0);

  useEffect(() => {
    bounce.value = withRepeat(
      withTiming(3, { duration: 1000, easing: Easing.in(Easing.quad) }),
      Infinity,
    );
  }, [bounce]);

  return (
    <Container direction="row" spacing={0.5}>
      <Dot dot={bounce} index={0} />
      <Dot dot={bounce} index={1} />
      <Dot dot={bounce} index={2} />
    </Container>
  );
};

export default Loading;
