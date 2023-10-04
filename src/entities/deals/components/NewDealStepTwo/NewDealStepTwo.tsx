import React, { useState } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { MultipleImageChoose } from '@core/components';
import { useWizard } from '@core/hooks';
import { File } from '@core/interfaces/IFile';
import { ScrollLayout } from '@core/layouts';
import { Button, Container, Text, Wizard } from '@core/ui';
import { useNewDeal } from '@e/deals/hooks';
import { newDealStepOne } from '@e/deals/schemas/NewDeal';

import NewDealHeader from '../NewDealHeader';

type FormStep1 = { name: string; description: string };

const NewDealStepTwo = () => {
  const { t } = useTranslation();
  const wizard = useWizard();
  const newDeal = useNewDeal();

  const [file, setFile] = useState<File[]>([]);

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
        <ScrollLayout>
          <NewDealHeader
            title={newDeal.data.name}
            subtitle={newDeal.data.description}
            onBack={wizard.onBack}
          />
          <Container pb={12} pt={3} spacing={1}>
            <Text fontSize={14} fontWeight="Medium" align="center">
              ¡Muestra pruebas de que 'tá chido!
            </Text>
            <MultipleImageChoose
              files={file}
              onChange={files => setFile(files)}
              maxSpaces={10}
              spaces={6}
              allowMore
            />
          </Container>
        </ScrollLayout>
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
