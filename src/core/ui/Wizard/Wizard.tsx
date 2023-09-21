import React, {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useMemo,
} from 'react';
import { StyleSheet } from 'react-native';

import Animated, {
  useAnimatedRef,
  useAnimatedScrollHandler,
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated';

import Page, { WIZARD_PAGE_WIDTH } from './Page';

export type WizardProps = React.PropsWithChildren & {
  allowScroll?: boolean;
};

type WizardSubComponets = React.PropsWithChildren & {
  Page: FC<PropsWithChildren>;
};

export const WizardContext = createContext(
  {} as {
    onNext: () => void;
    onBack: () => void;
    onGoTo: (index: number) => void;
  },
);

const Wizard: FC<WizardProps> & WizardSubComponets = ({
  children,
  allowScroll = false,
}) => {
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const translateX = useSharedValue(0);

  const activeIndex = useDerivedValue(() => {
    return Math.round(translateX.value / WIZARD_PAGE_WIDTH);
  });

  const CHILDS_SIZE = useMemo(
    () => React.Children.toArray(children).length,
    [children],
  );

  const scrollHandler = useAnimatedScrollHandler({
    onScroll(event) {
      translateX.value = event.contentOffset.x;
    },
  });

  const onNext = useCallback(() => {
    if (activeIndex.value === CHILDS_SIZE - 1) return;
    scrollRef.current?.scrollTo({
      x: WIZARD_PAGE_WIDTH * (activeIndex.value + 1),
    });
  }, [activeIndex, scrollRef, CHILDS_SIZE]);

  const onBack = useCallback(() => {
    if (activeIndex.value === 0) return;
    scrollRef.current?.scrollTo({
      x: WIZARD_PAGE_WIDTH * (activeIndex.value - 1),
    });
  }, [activeIndex, scrollRef]);

  const onGoTo = useCallback(
    (index: number) => {
      if (index === 0 || index === CHILDS_SIZE - 1) return;
      scrollRef.current?.scrollTo({ x: WIZARD_PAGE_WIDTH * index });
    },
    [scrollRef, CHILDS_SIZE],
  );

  return (
    <WizardContext.Provider value={{ onNext, onBack, onGoTo }}>
      <Animated.ScrollView
        //@ts-ignore
        ref={scrollRef}
        scrollEnabled={allowScroll}
        horizontal
        style={styles.container}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}>
        {children}
      </Animated.ScrollView>
    </WizardContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

Wizard.Page = Page;

export default Wizard;
