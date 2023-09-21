import React from 'react';

import { Wizard } from '@core/ui';
import { NewDealPage } from '@e/deals/components';

const NewDealScreen = () => {
  return (
    <Wizard>
      <NewDealPage
        title="Crea un nuevo trato"
        subtitle="¡Amigo, cuéntame qué vendes, descríbelo en pocas palabras!"
      />
      <NewDealPage />
      <NewDealPage />
    </Wizard>
  );
};

export default NewDealScreen;
