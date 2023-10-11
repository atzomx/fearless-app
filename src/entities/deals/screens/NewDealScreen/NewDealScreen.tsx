import React from 'react';

import { SafeLayout } from '@core/layouts';
import { Wizard } from '@core/ui';
import {
  NewDealStepFour,
  NewDealStepOne,
  NewDealStepThree,
  NewDealStepTwo,
} from '@e/deals/components';
import { NewDealContext } from '@e/deals/context';

const NewDealScreen = () => {
  return (
    <NewDealContext>
      <SafeLayout>
        <Wizard>
          <NewDealStepOne />
          <NewDealStepTwo />
          <NewDealStepThree />
          <NewDealStepFour />
        </Wizard>
      </SafeLayout>
    </NewDealContext>
  );
};

export default NewDealScreen;
