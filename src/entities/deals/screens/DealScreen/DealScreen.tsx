import React from 'react';

import { HeaderBar, SlideCarrousel } from '@core/components';
import { useNavigate } from '@core/hooks';
import { SafeLayout, ScrollLayout } from '@core/layouts';
import { Container } from '@core/ui';

const DealScreen = () => {
  const navigator = useNavigate();

  return (
    <SafeLayout>
      <HeaderBar
        onBack={() => navigator.pop(1)}
        title="Identificador de trato"
        subtitle="#7736672888290"
      />
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
