import React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useTheme } from 'styled-components/native';
import * as yup from 'yup';

import { HeaderBar, InputControl } from '@core/components';
import { useNavigate, useWizard } from '@core/hooks';
import { Button, Container, InputInvisible, Wizard } from '@core/ui';

import { useNewDeal } from '@e/deals/hooks';
import { newDealStepOne } from '@e/deals/schemas/NewDeal';

import NewDealHeader from '../NewDealHeader';

type FormStep1 = yup.InferType<typeof newDealStepOne>;

const NewDealStepOne = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const wizard = useWizard();
  const navigator = useNavigate();
  const newDeal = useNewDeal();

  const { control, handleSubmit } = useForm<FormStep1>({
    resolver: yupResolver(newDealStepOne),
    defaultValues: { name: '', description: '', brand: '' },
    mode: 'onBlur',
  });

  const onSubmit = (data: FormStep1) => {
    newDeal.setInfo(data);
    wizard.onNext();
  };

  return (
    <Wizard.Page>
      <Wizard.Body>
        <HeaderBar onBack={() => navigator.goBack()} />
        <KeyboardAwareScrollView
          enableOnAndroid
          enableAutomaticScroll
          extraScrollHeight={130}>
          <NewDealHeader
            title={t('deals.wizard.one.title')}
            subtitle={t('deals.wizard.one.subtitle')}
          />
          <Container pt={6} spacing={3}>
            <InputControl
              control={control}
              name="name"
              component={InputInvisible}
              fontWeight="SemiBold"
              fontSize={32}
              label={t('deals.wizard.one.name')}
              placeholder={t('common.schemas.placeholder')}
            />
            <InputControl
              control={control}
              name="brand"
              component={InputInvisible}
              label={t('deals.wizard.one.brand')}
              placeholder={t('common.schemas.placeholder')}
              fontSize={16}
              fontWeight="SemiBold"
              color={theme.palette.grey['900']}
            />
            <InputControl
              control={control}
              name="description"
              component={InputInvisible}
              label={t('deals.wizard.one.description')}
              placeholder={t('common.schemas.placeholder')}
              fontSize={16}
              fontWeight="Regular"
              color={theme.palette.grey['500']}
            />
          </Container>
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

export default NewDealStepOne;
