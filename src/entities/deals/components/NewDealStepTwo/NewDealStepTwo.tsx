import React, { useCallback, useState } from 'react';

import { useTranslation } from 'react-i18next';

import { MultipleImageChoose } from '@core/components';
import { useWizard } from '@core/hooks';
import { File } from '@core/interfaces/IFile';
import { ScrollLayout } from '@core/layouts';
import { Button, Container, Text, Wizard } from '@core/ui';
import { useNewDeal } from '@e/deals/hooks';

import NewDealHeader from '../NewDealHeader';

const MIN_FILES = 1;

const NewDealStepTwo = () => {
  const { t } = useTranslation();
  const wizard = useWizard();
  const newDeal = useNewDeal();

  const [file, setFile] = useState<File[]>(newDeal.data.files ?? []);

  const onChangeFiles = useCallback((files: File[]) => {
    setFile(files);
  }, []);

  const onSubmit = () => {
    if (MIN_FILES > file.length) return;
    newDeal.setFiles({ files: file });
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
              {t('deals.wizard.two.description')}
            </Text>
            <MultipleImageChoose
              files={file}
              onChange={onChangeFiles}
              maxSpaces={10}
              spaces={MIN_FILES}
              allowMore
            />
          </Container>
        </ScrollLayout>
      </Wizard.Body>
      <Wizard.Actions>
        <Button title={t('deals.wizard.one.action')} onPress={onSubmit} />
      </Wizard.Actions>
    </Wizard.Page>
  );
};

export default NewDealStepTwo;
