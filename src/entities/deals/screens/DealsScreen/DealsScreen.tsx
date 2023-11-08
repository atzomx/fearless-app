import React, { useState } from 'react';

import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components/native';

import { HeaderBar, HomeHeaderBar } from '@core/components';
import ProfileButton from '@core/components/ProfileButton';
import { useModal, useNavigate } from '@core/hooks';
import { PlusIcon, SearchIcon } from '@core/icons';
import { SafeLayout, ScrollLayout } from '@core/layouts';
import {
  Button,
  Container,
  FloatButton,
  InputText,
  Modal,
  Spacer,
  Tab,
  TabPanel,
  Tabs,
  Text,
} from '@core/ui';
import { DealCard, DealFilters, DealHeader } from '@e/deals/components';
import DEALS_ROUTES from '@e/deals/constants/routes';

const deal = {
  status: 'Espeando Confirmacion',
  itemStatus: 'Usado',
  id: '7736672888290',
  name: 'Tarjeta grafica 3060 Ti',
  description:
    'Tarjeta de video GeForce 370 Ti marca Zotac con 3 años de uso, sin garantia del proveedor, funciona..',
  amount: '$6,000',
  dealer: 'Jose Arevalos Martinex',
};

const DEALS = [deal, deal, deal, deal, deal];

const DealsScreen = () => {
  const theme = useTheme();
  const modal = useModal();
  const router = useNavigate();

  const [tab, setTab] = useState(0);
  const { t } = useTranslation();

  return (
    <SafeLayout>
      <HomeHeaderBar />
      <ScrollLayout p={2}>
        <Container spacing={1}>
          <DealHeader />
          <Tabs
            value={tab}
            onChange={current => setTab(current)}
            actions={<DealFilters onPress={modal.open} />}>
            <Tab>{t('deals.screen.tabs.active')}</Tab>
            <Tab>{t('deals.screen.tabs.finished')}</Tab>
          </Tabs>
          <TabPanel value={tab} index={0}>
            <Container spacing={2}>
              <DealCard
                deal={DEALS[0]}
                onPress={() => router.push(DEALS_ROUTES.one)}
              />
              <DealCard
                deal={DEALS[0]}
                onPress={() => router.push(DEALS_ROUTES.one)}
              />
              <DealCard
                deal={DEALS[0]}
                onPress={() => router.push(DEALS_ROUTES.one)}
              />
            </Container>
          </TabPanel>
          <TabPanel value={tab} index={1}>
            <Text>Noting to show</Text>
          </TabPanel>
        </Container>
      </ScrollLayout>
      <FloatButton onPress={() => router.push(DEALS_ROUTES.new)}>
        <PlusIcon width={20} height={20} color={theme.pallete.common.white} />
      </FloatButton>
      <Modal open={modal.isOpen} onClose={modal.close} title="Filtros">
        <Container p={2}>
          <InputText
            label={t('deals.screen.modal.input.label')}
            placeholder={t('deals.screen.modal.input.placeholder')}
            icon={<SearchIcon color={theme.pallete.grey[400]} />}
          />
          <Spacer spacing={2} />
          <Button title="Hecho" />
        </Container>
      </Modal>
    </SafeLayout>
  );
};

export default DealsScreen;
