import React, { useState } from 'react';

import { useTranslation } from 'react-i18next';

import { ImagePreviewer } from '@core/components';
import { useWizard } from '@core/hooks';
import { Button, Checkbox, Container, Wizard } from '@core/ui';
import Money from '@core/utils/Money';
import { useNewDeal } from '@e/deals/hooks';

import DealSummary from '../DealSummary';
import NewDealHeader from '../NewDealHeader';

const NewDealStepFour = () => {
  const { t } = useTranslation();
  const wizard = useWizard();
  const newDeal = useNewDeal();
  const [check, setCheck] = useState(false);

  const onSubmit = () => {
    wizard.onNext();
  };

  return (
    <Wizard.Page>
      <Wizard.Body>
        <NewDealHeader
          title={newDeal.data.name}
          subtitle={newDeal.data.description}
          onBack={wizard.onBack}
        />
        <Container pb={12} pt={0}>
          <ImagePreviewer images={newDeal.data.files} maxShowed={3} />
          <DealSummary
            product={Money.fromString(newDeal.data.amount).toNumber()}
            // TODO: ADD THIS VALUE FROM SERVICE
            service={80}
          />
        </Container>
      </Wizard.Body>
      <Wizard.Actions>
        <Container alignItems="center" mb={2}>
          <Checkbox
            label={t('deals.wizard.four.term_conditons')}
            value={check}
            onChange={value => setCheck(value)}
          />
        </Container>
        <Button title={t('deals.wizard.four.action')} onPress={onSubmit} />
      </Wizard.Actions>
    </Wizard.Page>
  );
};

export default NewDealStepFour;
