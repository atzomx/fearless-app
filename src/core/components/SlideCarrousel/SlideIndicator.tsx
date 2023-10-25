import React, { FC } from 'react';
import { StyleSheet } from 'react-native';

import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { useTheme } from 'styled-components/native';

import { SLIDE_IMAGE_WIDTH } from './SlideImage';

const INDICATOR_WIDTH = 6;

export type SlideIndicatorProps = {
  scrollOffset: SharedValue<number>;
  index: number;
};
const SlideIndicator: FC<SlideIndicatorProps> = ({ scrollOffset, index }) => {
  const theme = useTheme();
  const animatedStyle = useAnimatedStyle(() => {
    const input = scrollOffset.value / SLIDE_IMAGE_WIDTH;
    const inputRange = [index - 1, index, index + 1];

    const backgroundColor = interpolateColor(input, inputRange, [
      theme.pallete.grey[200],
      theme.pallete.common.black,
      theme.pallete.grey[200],
    ]);

    const width = interpolate(
      input,
      inputRange,
      [INDICATOR_WIDTH, INDICATOR_WIDTH * 3.5, INDICATOR_WIDTH],
      Extrapolate.CLAMP,
    );

    return { width, backgroundColor };
  });

  return <Animated.View style={[styles.indicator, animatedStyle]} />;
};

const styles = StyleSheet.create({
  indicator: {
    marginTop: 10,
    marginHorizontal: 2,
    height: INDICATOR_WIDTH,
    borderRadius: INDICATOR_WIDTH / 2,
  },
});

export default SlideIndicator;
