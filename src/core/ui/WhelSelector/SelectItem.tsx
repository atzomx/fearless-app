import React, { FC, PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';

import Animated, {
  Extrapolate,
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

import Text from '../Text';

type SelectItemProps = PropsWithChildren & {
  scrollOffset: SharedValue<number>;
  index: number;
};

export const SELECT_OPTION_HEIGHT = 40;

const SelectItem: FC<SelectItemProps> = ({ children, scrollOffset, index }) => {
  const animatedStyle = useAnimatedStyle(() => {
    const inputRange = [
      (index - 1) * SELECT_OPTION_HEIGHT,
      index * SELECT_OPTION_HEIGHT,
      (index + 1) * SELECT_OPTION_HEIGHT,
    ];

    const scale = interpolate(
      scrollOffset.value,
      inputRange,
      [0.8, 1, 0.8],
      Extrapolate.CLAMP,
    );
    const opacity = interpolate(
      scrollOffset.value,
      inputRange,
      [0.5, 1, 0.5],
      Extrapolate.CLAMP,
    );

    return {
      transform: [{ scale }],
      opacity,
    };
  });

  return (
    <Animated.View key={index} style={[styles.container, animatedStyle]}>
      <Text align="center" color="black" fontWeight="Regular">
        {children}
      </Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: SELECT_OPTION_HEIGHT,
    justifyContent: 'center',
  },
});

export default SelectItem;
