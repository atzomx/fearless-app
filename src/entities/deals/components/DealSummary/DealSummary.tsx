import React, { FC, useMemo } from 'react';

import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components/native';

import { Container, Divider, Text } from '@core/ui';
import Money from '@core/utils/Money';

export type DealSummaryProps = {
  product: number;
  service: number;
};

const DealSummary: FC<DealSummaryProps> = ({ product, service }) => {
  const theme = useTheme();
  const { t } = useTranslation();

  const TOTAL = useMemo(() => {
    return product - service;
  }, [product, service]);

  return (
    <Container p={4} mv={2}>
      <Container direction="row" justifyContent="space-between">
        <Text fontSize={16} color={theme.pallete.grey[500]}>
          {t('deals.wizard.four.product_amount')}
        </Text>
        <Text fontSize={16} color={theme.pallete.grey[900]}>
          {Money.fromNumber(product).toFormat()}
        </Text>
      </Container>
      <Container direction="row" justifyContent="space-between">
        <Text fontSize={16} color={theme.pallete.grey[500]}>
          {t('deals.wizard.four.product_service')}
        </Text>
        <Text fontSize={16} color={theme.pallete.grey[900]}>
          {Money.fromNumber(service).toFormat()}
        </Text>
      </Container>
      <Divider />
      <Container direction="row" justifyContent="space-between">
        <Text fontSize={16} color={theme.pallete.common.black}>
          {t('deals.wizard.four.income_amount')}
        </Text>
        <Text
          fontWeight="Bold"
          fontSize={16}
          color={theme.pallete.common.black}>
          {Money.fromNumber(TOTAL).toFormat()}
        </Text>
      </Container>
    </Container>
  );
};

export default DealSummary;
