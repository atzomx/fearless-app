/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

import { useRoute } from '@react-navigation/native';

import { HeaderBar, SlideCarrousel } from '@core/components';
import { useNavigate } from '@core/hooks';
import { SafeLayout, ScrollLayout } from '@core/layouts';
import { Container } from '@core/ui';
import { BaseDeal } from '@e/deals/types';

const DealScreen = () => {
  const navigator = useNavigate();
  const route = useRoute();

  const { deal } = route.params as { deal: BaseDeal };

  return (
    <SafeLayout>
      <HeaderBar onBack={() => navigator.pop(1)} />
      <ScrollLayout>
        <Container p={2} spacing={1} />
        <SlideCarrousel
          images={[
            'https://random.imagecdn.app/500/510',
            'https://random.imagecdn.app/520/510',
            'https://random.imagecdn.app/530/500',
            'https://random.imagecdn.app/600/310',
            'https://random.imagecdn.app/600/810',
            'https://random.imagecdn.app/500/910',
            'https://random.imagecdn.app/900/410',
            'https://random.imagecdn.app/800/910',
            'https://random.imagecdn.app/900/710',
          ]}
        />
      </ScrollLayout>
    </SafeLayout>
  );
};

export default DealScreen;
