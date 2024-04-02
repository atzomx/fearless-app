import React from 'react';

import { HomeHeaderBar } from '@core/components';
import { SafeLayout, ScrollLayout } from '@core/layouts';
import { Container } from '@core/ui';
import { HomeGradients, MoreTitle } from '@e/home/components';

const WelcomeScreen = () => {
  return (
    <SafeLayout>
      <HomeHeaderBar>
        <ScrollLayout showsVerticalScrollIndicator={false}>
          <Container p={2} spacing={1}>
            <HomeGradients />
            <MoreTitle title="Pending Deals" more="See more" />
          </Container>
        </ScrollLayout>
      </HomeHeaderBar>
    </SafeLayout>
  );
};

export default WelcomeScreen;
