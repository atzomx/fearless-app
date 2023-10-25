import React, { useState, useRef, useEffect } from 'react';
import {
  Dimensions,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  View,
} from 'react-native';

import { useSharedValue } from 'react-native-reanimated';

import SlideImage, { SLIDE_IMAGE_WIDTH } from './SlideImage';
import SlideIndicator from './SlideIndicator';

import ImageCarrouselViewer from '../ImageCarrouselViewer';

const { width } = Dimensions.get('screen');

export type SlideCarrouselProps = {
  images: Array<string>;
};

const SlideCarrousel: React.FC<SlideCarrouselProps> = ({ images }) => {
  const [currentFile, setCurrentFile] = useState<number | null>(null);
  const scrollOffset = useSharedValue(0);
  const ref = useRef<FlatList<string>>();

  const scrollHandler = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    scrollOffset.value = event.nativeEvent.contentOffset.x;
  };

  useEffect(() => {
    ref?.current?.scrollToOffset({
      offset: SLIDE_IMAGE_WIDTH,
      animated: true,
    });
  }, [ref]);

  return (
    <>
      <FlatList
        data={images}
        decelerationRate="fast"
        snapToStart
        snapToEnd
        ref={ref as React.RefObject<FlatList<string>>}
        keyExtractor={(_, index) => index.toString()}
        scrollEventThrottle={16}
        onScroll={scrollHandler}
        snapToInterval={SLIDE_IMAGE_WIDTH}
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={styles.scroll}
        renderItem={({ item, index }) => {
          return (
            <SlideImage
              scrollOffset={scrollOffset}
              image={item}
              index={index}
              onPress={() => setCurrentFile(index)}
            />
          );
        }}
      />
      <View style={styles.indicatorContainer}>
        {images.map((_, index) => (
          <SlideIndicator
            key={index}
            index={index}
            scrollOffset={scrollOffset}
          />
        ))}
      </View>
      <ImageCarrouselViewer
        images={images.map(uri => ({ uri }))}
        imageIndex={currentFile ?? 0}
        visible={currentFile !== null}
        onRequestClose={() => setCurrentFile(null)}
      />
    </>
  );
};

const styles = StyleSheet.create({
  scroll: {
    paddingHorizontal: (width - SLIDE_IMAGE_WIDTH) / 2,
  },
  indicatorContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default SlideCarrousel;
