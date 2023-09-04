import React from 'react';

import { SafeLayout } from '@core/layouts';
import { Text } from '@core/ui';
import { DealCard } from '@e/deals/components';

const DEALS = [
  {
    status: 'Espeando Confirmacion',
    itemStatus: 'Usado',
    id: '7736672888290',
    name: 'Tarjeta grafica 3060 Ti',
    description:
      'Tarjeta de video GeForce 370 Ti marca Zotac con 3 años de uso, sin garantia del proveedor, funciona..',
    amount: '$6,000',
    dealer: 'Jose Arevalos Martinex',
  },
];

const DealsScreen = () => {
  return (
    <SafeLayout sx={{ padding: 10 }}>
      <Text>Deal Screen</Text>
      <DealCard deal={DEALS[0]} />
    </SafeLayout>
  );
};

export default DealsScreen;
