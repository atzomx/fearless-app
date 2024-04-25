import React from 'react';

import { SafeAreaView } from 'react-native-safe-area-context';

import { HomeHeaderBar } from '@core/components';
import { SafeLayout, ScrollLayout } from '@core/layouts';
import { Container } from '@core/ui';

import { HomeGradients, MoreTitle } from '@e/home/components';

const WelcomeScreen = () => {
  return (
    <SafeLayout>
      <SafeAreaView>
        <HomeHeaderBar />
        <ScrollLayout showsVerticalScrollIndicator={false}>
          <Container p={2} spacing={1}>
            <HomeGradients />
            <MoreTitle title="Recent Deals" more="See more" />
          </Container>
        </ScrollLayout>
      </SafeAreaView>
    </SafeLayout>
  );
};

export default WelcomeScreen;
