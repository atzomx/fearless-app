import React, {
  FC,
  RefObject,
  useCallback,
  useLayoutEffect,
  useRef,
} from 'react';
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  View,
} from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';
import { useSharedValue } from 'react-native-reanimated';
import { useDebouncedCallback } from 'use-debounce';

import SelectItem, { SELECT_OPTION_HEIGHT } from './SelectItem';
import * as S from './WhelSelector.style';

export type WhelSelector = {
  data: { value?: string; label: string }[];
  onChangeIndex: (index: number) => void;
  index: number;
};

const WhelSelector: FC<WhelSelector> = ({ data, index, onChangeIndex }) => {
  const scrollRef = useRef<ScrollView>();
  const scrollOffset = useSharedValue(0);

  const handleOnChangeValue = useDebouncedCallback((newIndex: number) => {
    onChangeIndex(newIndex);
  }, 200);

  const scrollHandler = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const { y } = event.nativeEvent.contentOffset;
      scrollOffset.value = y;
      const currentIndex = Math.round(y / SELECT_OPTION_HEIGHT);
      handleOnChangeValue(currentIndex);
    },
    [scrollOffset, handleOnChangeValue],
  );

  useLayoutEffect(() => {
    scrollRef.current?.scrollTo({
      y: SELECT_OPTION_HEIGHT * index,
      animated: false,
    });
  }, [scrollRef, index]);

  return (
    <View onStartShouldSetResponder={() => true}>
      <ScrollView
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        decelerationRate="fast"
        nestedScrollEnabled
        snapToStart
        snapToEnd
        ref={scrollRef as RefObject<ScrollView>}
        style={styles.scroll}
        contentContainerStyle={styles.content}
        snapToInterval={SELECT_OPTION_HEIGHT}>
        {data.map((item, actualIndex) => (
          <SelectItem
            key={item.value?.toString() ?? 'unselect-value'}
            scrollOffset={scrollOffset}
            index={actualIndex}>
            {item.label}
          </SelectItem>
        ))}
      </ScrollView>
      <S.Selector />
    </View>
  );
};

const styles = StyleSheet.create({
  scroll: {
    maxHeight: SELECT_OPTION_HEIGHT * 3,
    flexGrow: 1,
    zIndex: 100,
  },
  content: {
    paddingBottom: SELECT_OPTION_HEIGHT * 1,
    paddingTop: SELECT_OPTION_HEIGHT * 1,
  },
});

export default WhelSelector;
