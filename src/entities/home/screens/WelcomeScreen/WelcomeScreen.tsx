import { HomeHeaderBar } from '@core/components';
import { SafeLayout, ScrollLayout } from '@core/layouts';
import { Container } from '@core/ui';
import { HomeGradients, MoreTitle } from '@e/home/components';
import React from 'react';

const WelcomeScreen = () => {
  return (
    <SafeLayout>
      <HomeHeaderBar />
      <ScrollLayout showsVerticalScrollIndicator={false}>
        <Container p={2} spacing={1}>
          <HomeGradients />
          <MoreTitle />
        </Container>
      </ScrollLayout>
    </SafeLayout>
  );
};

export default WelcomeScreen;
