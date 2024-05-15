import React, { useRef, useState } from 'react';
import { View } from 'react-native';

import { useTranslation } from 'react-i18next';
import Animated, {
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

import { HomeHeaderBar } from '@core/components';
import { useModal, useNavigate } from '@core/hooks';
import { PlusIcon } from '@core/icons';
import { SafeLayout, ScrollLayout } from '@core/layouts';
import { Container, FloatButton, Tab, TabPanel, Tabs } from '@core/ui';

import {
  DealFilters,
  DealHeader,
  DealList,
  type Deal,
} from '@e/deals/components';
import DEALS_ROUTES from '@e/deals/constants/routes';
import { BaseDeal } from '@e/deals/types';

const deal: BaseDeal = {
  status: 'Espeando Confirmacion',
  itemStatus: 'Usado',
  id: '7736672888290',
  name: 'Tarjeta grafica 3060 Ti',
  description:
    'Tarjeta de video GeForce 370 Ti marca Zotac con 3 años de uso, sin garantia del proveedor, funciona..',
  amount: '$6,000',
  dealer: 'Jose Arevalos Martinex',
};

const DEALS = Array.from({ length: 10 }).map(() => deal);

const HIDDEN_POSITION = 80;
const INTERPOLATE = [HIDDEN_POSITION / 2, HIDDEN_POSITION, HIDDEN_POSITION * 2];

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const DealsScreen = () => {
  const modal = useModal();
  const router = useNavigate();
  const translateY = useSharedValue(0);

  const [tab, setTab] = useState(0);
  const { t } = useTranslation();
  const ref = useRef<View>(null);

  const onPressItem = (current: Deal) => {
    router.navigate('deals', {
      screen: DEALS_ROUTES.one,
      params: { deal: current },
    });
  };

  const onPressNew = () => {
    router.navigate('deals', {
      screen: DEALS_ROUTES.new,
    });
  };

  const scrollHandler = useAnimatedScrollHandler({
    onScroll(event) {
      translateY.value = event.contentOffset.y;
    },
  });

  const rStyleHeaderInScroll = useAnimatedStyle(() => {
    const opacity = interpolate(
      translateY.value,
      INTERPOLATE,
      [1, 0.3, 0],
      'clamp',
    );
    return {
      opacity,
    };
  });

  const rStyleHeaderTop = useAnimatedStyle(() => {
    const opacity = interpolate(
      translateY.value,
      INTERPOLATE,
      [0, 0, 1],
      'clamp',
    );
    const height = Math.min(
      interpolate(
        translateY.value,
        INTERPOLATE,
        [0, 0, HIDDEN_POSITION],
        'clamp',
      ),
      HIDDEN_POSITION,
    );
    return {
      opacity,
      height,
    };
  });

  return (
    <SafeLayout>
      <SafeAreaView>
        <HomeHeaderBar />
        <AnimatedContainer ph={2} spacing={1} style={rStyleHeaderTop}>
          <DealFilters ref={ref} onPress={modal.open} />
          <Tabs value={tab} onChange={current => setTab(current)}>
            <Tab>{t('deals.screen.tabs.active')}</Tab>
            <Tab>{t('deals.screen.tabs.finished')}</Tab>
          </Tabs>
        </AnimatedContainer>
        <ScrollLayout
          onScroll={scrollHandler}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}>
          <AnimatedContainer
            ph={2}
            spacing={1}
            flex={1}
            style={rStyleHeaderInScroll}>
            <DealHeader />
            <DealFilters ref={ref} onPress={modal.open} />
            <Tabs value={tab} onChange={current => setTab(current)}>
              <Tab>{t('deals.screen.tabs.active')}</Tab>
              <Tab>{t('deals.screen.tabs.finished')}</Tab>
            </Tabs>
          </AnimatedContainer>
          <TabPanel value={tab} index={0}>
            <DealList deals={DEALS} onPressItem={onPressItem} />
          </TabPanel>
          <TabPanel value={tab} index={1}>
            <DealList deals={DEALS} />
          </TabPanel>
        </ScrollLayout>
      </SafeAreaView>
      <FloatButton onPress={onPressNew}>
        <PlusIcon color="white" />
      </FloatButton>
    </SafeLayout>
  );
};

export default DealsScreen;
