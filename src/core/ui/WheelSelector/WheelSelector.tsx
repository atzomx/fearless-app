import React, { FC, memo, useCallback, useLayoutEffect, useRef } from 'react';
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';

import { useSharedValue } from 'react-native-reanimated';
import { useDebouncedCallback } from 'use-debounce';

import SelectItem, { SELECT_OPTION_HEIGHT } from './SelectItem';
import * as S from './WheelSelector.style';

import Container from '../Container';

type ItemSelector = { value?: string; label: string };

export type WheelSelectorProps = {
  data: ItemSelector[];
  onChangeIndex: (index: number) => void;
  index: number;
  inverted?: boolean;
  style?: StyleProp<ViewStyle>;
};

const WheelSelector: FC<WheelSelectorProps> = ({
  data,
  index,
  onChangeIndex,
  style,
  inverted,
}) => {
  const scrollRef = useRef<FlatList<ItemSelector>>();
  const scrollOffset = useSharedValue(0);

  const handleOnChangeValue = useDebouncedCallback((newIndex: number) => {
    onChangeIndex(newIndex);
  }, 100);

  const scrollHandler = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const { y } = event.nativeEvent.contentOffset;
      const currentIndex = Math.round(y / SELECT_OPTION_HEIGHT);
      scrollOffset.value = currentIndex;
      handleOnChangeValue(currentIndex);
    },
    [scrollOffset, handleOnChangeValue],
  );

  useLayoutEffect(() => {
    setTimeout(() => {
      scrollRef.current?.scrollToItem({ item: data[index], animated: false });
    }, 0);
  }, [scrollRef, index, data]);

  const renderItem = useCallback(
    ({ item, index: actualIndex }: { item: ItemSelector; index: number }) => (
      <SelectItem
        disabled={!item.value}
        key={item.value?.toString() ?? 'unselect-value'}
        scrollOffset={scrollOffset}
        index={actualIndex}>
        {item.label}
      </SelectItem>
    ),
    [scrollOffset],
  );

  return (
    <Container style={style}>
      <FlatList
        data={data}
        decelerationRate="fast"
        inverted={inverted}
        getItemLayout={(_, itemIndex) => ({
          length: SELECT_OPTION_HEIGHT,
          offset: SELECT_OPTION_HEIGHT * itemIndex,
          index: itemIndex,
        })}
        snapToStart
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        onScroll={scrollHandler}
        ref={scrollRef as React.RefObject<FlatList<ItemSelector>>}
        snapToInterval={SELECT_OPTION_HEIGHT}
        snapToEnd
        maxToRenderPerBatch={5}
        removeClippedSubviews
        initialNumToRender={7}
        style={styles.scroll}
        contentContainerStyle={styles.content}
        keyExtractor={({ value }) => value?.toString() ?? 'unselect'}
        renderItem={renderItem}
      />
      <S.Selector />
    </Container>
  );
};

const styles = StyleSheet.create({
  scroll: {
    maxHeight: SELECT_OPTION_HEIGHT * 3,
    flexGrow: 1,
    zIndex: 1,
  },
  content: {
    paddingBottom: SELECT_OPTION_HEIGHT * 1,
    paddingTop: SELECT_OPTION_HEIGHT * 1,
  },
});

export default memo(WheelSelector);
