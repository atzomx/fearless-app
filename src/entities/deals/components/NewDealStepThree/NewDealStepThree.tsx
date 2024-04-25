import React, { useState } from 'react';

import { useTranslation } from 'react-i18next';

import { HeaderBar, ImagePreviewer, NumberKeyboard } from '@core/components';
import { useWizard } from '@core/hooks';
import { Button, Container, Wizard } from '@core/ui';

import { useNewDeal } from '@e/deals/hooks';

import NewDealHeader from '../NewDealHeader';

const NewDealStepThree = () => {
  const { t } = useTranslation();
  const wizard = useWizard();
  const newDeal = useNewDeal();

  const [amount, setAmount] = useState(newDeal.data.amount ?? '');

  const onSubmit = () => {
    if (+amount <= 0 || isNaN(+amount)) return;
    newDeal.setAmount({ amount });
    wizard.onNext();
  };

  return (
    <Wizard.Page>
      <Wizard.Body>
        <HeaderBar onBack={() => wizard.onBack()} />
        <NewDealHeader
          title={newDeal.data.name}
          subtitle={newDeal.data.description}
        />
        <Container pb={12} pt={0}>
          <ImagePreviewer images={newDeal.data.files} maxShowed={3} />
          <NumberKeyboard
            title={t('deals.wizard.three.description')}
            value={amount}
            onChangeText={text => setAmount(text)}
          />
        </Container>
      </Wizard.Body>
      <Wizard.Actions>
        <Button title={t('deals.wizard.one.action')} onPress={onSubmit} />
      </Wizard.Actions>
    </Wizard.Page>
  );
};

export default NewDealStepThree;
