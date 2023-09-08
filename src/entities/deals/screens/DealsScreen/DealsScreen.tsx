import React, { useState } from 'react';

import { HeaderBar } from '@core/components';
import { SafeLayout, ScrollLayout, SpacingLayout } from '@core/layouts';
import { Tab, TabPanel, Tabs, Text } from '@core/ui';
import { DealCard, DealFilters, DealHeader } from '@e/deals/components';

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
  const [tab, setTab] = useState(0);
  return (
    <SafeLayout>
      <ScrollLayout p={2}>
        <SpacingLayout spacing={1}>
          <HeaderBar />
          <DealHeader />
          <Tabs
            value={tab}
            onChange={current => setTab(current)}
            actions={<DealFilters />}>
            <Tab>Activos</Tab>
            <Tab>Finalizados</Tab>
          </Tabs>
          <TabPanel value={tab} index={0}>
            <SpacingLayout spacing={2}>
              <DealCard deal={DEALS[0]} />
              <DealCard deal={DEALS[0]} />
              <DealCard deal={DEALS[0]} />
            </SpacingLayout>
          </TabPanel>
          <TabPanel value={tab} index={1}>
            <Text>Noting to show</Text>
          </TabPanel>
        </SpacingLayout>
      </ScrollLayout>
    </SafeLayout>
  );
};

export default DealsScreen;
