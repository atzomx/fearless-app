import React, { FC, PropsWithChildren, memo } from 'react';
import { StyleSheet } from 'react-native';

import Animated, {
  Extrapolate,
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { useTheme } from 'styled-components/native';

import Text from '../Text';

type SelectItemProps = PropsWithChildren & {
  scrollOffset: SharedValue<number>;
  index: number;
  disabled: boolean;
};

export const SELECT_OPTION_HEIGHT = 40;

const SelectItem: FC<SelectItemProps> = ({
  children,
  scrollOffset,
  index,
  disabled,
}) => {
  const theme = useTheme();

  const animatedStyle = useAnimatedStyle(() => {
    const inputRange = [index - 1, index, index + 1];
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
      <Text
        align="center"
        color={disabled ? theme.palette.grey[500] : theme.palette.common.black}
        fontWeight="Regular">
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

export default memo(SelectItem);
