import React, { FC } from 'react';
import { Image, StyleSheet } from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

export type SlideImageProps = {
  scrollOffset: SharedValue<number>;
  index: number;
  image: string;
  onPress: () => void;
};

export const SLIDE_IMAGE_WIDTH = 250;

const SlideImage: FC<SlideImageProps> = ({
  image,
  scrollOffset,
  index,
  onPress,
}) => {
  const animatedStyle = useAnimatedStyle(() => {
    const inputRange = [
      (index - 1) * SLIDE_IMAGE_WIDTH,
      index * SLIDE_IMAGE_WIDTH,
      (index + 1) * SLIDE_IMAGE_WIDTH,
    ];

    const scale = interpolate(
      scrollOffset.value,
      inputRange,
      [0.8, 1, 0.8],
      Extrapolate.CLAMP,
    );

    return {
      transform: [{ scale }],
    };
  });

  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
      <Animated.View key={index} style={[styles.container, animatedStyle]}>
        <Image style={styles.image} source={{ uri: image }} />
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: SLIDE_IMAGE_WIDTH,
    height: SLIDE_IMAGE_WIDTH,
  },
  image: {
    width: SLIDE_IMAGE_WIDTH,
    height: SLIDE_IMAGE_WIDTH,
    borderRadius: 10,
  },
});

export default SlideImage;
