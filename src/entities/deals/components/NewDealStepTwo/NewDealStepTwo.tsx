import React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { useWizard } from '@core/hooks';
import { Button, Container, Wizard } from '@core/ui';
import { useNewDeal } from '@e/deals/hooks';
import { newDealStepOne } from '@e/deals/schemas/NewDeal';

import NewDealHeader from '../NewDealHeader';

type FormStep1 = { name: string; description: string };

const NewDealStepTwo = () => {
  const { t } = useTranslation();
  const wizard = useWizard();
  const newDeal = useNewDeal();

  const { handleSubmit } = useForm<FormStep1>({
    resolver: yupResolver(newDealStepOne),
    defaultValues: { name: '', description: '' },
    mode: 'onBlur',
  });

  const onSubmit = (data: FormStep1) => {
    console.log(data);
    wizard.onNext();
  };

  return (
    <Wizard.Page>
      <Wizard.Body>
        <KeyboardAwareScrollView
          enableOnAndroid
          enableAutomaticScroll
          extraScrollHeight={130}>
          <NewDealHeader
            title={newDeal.data.name}
            subtitle={newDeal.data.description}
            onBack={wizard.onBack}
          />
          <Container pt={6} spacing={6} />
        </KeyboardAwareScrollView>
      </Wizard.Body>
      <Wizard.Actions>
        <Button
          title={t('deals.wizard.one.action')}
          onPress={handleSubmit(onSubmit)}
        />
      </Wizard.Actions>
    </Wizard.Page>
  );
};

export default NewDealStepTwo;
