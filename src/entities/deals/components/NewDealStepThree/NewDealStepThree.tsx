import React from 'react';

import { useTranslation } from 'react-i18next';

import { ImagePreviewer } from '@core/components';
import { useWizard } from '@core/hooks';
import { ScrollLayout } from '@core/layouts';
import { Button, Container, Wizard } from '@core/ui';
import { useNewDeal } from '@e/deals/hooks';

import NewDealHeader from '../NewDealHeader';

const NewDealStepThree = () => {
  const { t } = useTranslation();
  const wizard = useWizard();
  const newDeal = useNewDeal();

  const onSubmit = () => {
    wizard.onNext();
  };

  return (
    <Wizard.Page>
      <Wizard.Body>
        <ScrollLayout>
          <NewDealHeader
            title={newDeal.data.name}
            subtitle={newDeal.data.description}
            onBack={wizard.onBack}
          />
          <Container pb={12} pt={3} spacing={1}>
            <ImagePreviewer images={newDeal.data.files} maxShowed={3} />
          </Container>
        </ScrollLayout>
      </Wizard.Body>
      <Wizard.Actions>
        <Button title={t('deals.wizard.one.action')} onPress={onSubmit} />
      </Wizard.Actions>
    </Wizard.Page>
  );
};

export default NewDealStepThree;
