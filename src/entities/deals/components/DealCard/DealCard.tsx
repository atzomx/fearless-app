import React from 'react';

import { useTranslation } from 'react-i18next';

import { SpacingLayout } from '@core/layouts';
import { Text } from '@core/ui';

import * as S from './DealCard.style';

import DealStatus from '../DealStatus';

export type DealCardProps = {
  deal: {
    status: string;
    itemStatus: string;
    id: string;
    name: string;
    description: string;
    amount: string;
    dealer: string;
  };
};

const DealCard = ({ deal }: DealCardProps) => {
  const { status, itemStatus, id, name, description, amount, dealer } = deal;
  const { t } = useTranslation();

  return (
    <S.CardContainer>
      <SpacingLayout spacing={0.75}>
        <S.FooterContainer>
          <DealStatus variant="WAITING">{status}</DealStatus>
          <S.ItemStatus>
            <Text color="white" fontWeight="Bold" fontSize={9}>
              {itemStatus}
            </Text>
          </S.ItemStatus>
        </S.FooterContainer>
        <S.Identifier>#{id}</S.Identifier>
        <Text color="black" fontWeight="SemiBold" fontSize={20}>
          {name}
        </Text>
        <Text color="#909090" fontWeight="Regular" fontSize={12}>
          {description}
        </Text>
        <S.SeparatorContainer>
          <S.Separator />
        </S.SeparatorContainer>
        <S.FooterContainer>
          <S.AmountContainer>
            <Text color="black" fontWeight="SemiBold" fontSize={24}>
              {amount}
            </Text>
            <Text color="#909090" fontWeight="Regular" fontSize={10}>
              {t('deals.card.value')}
            </Text>
          </S.AmountContainer>
          <S.DealerContainer>
            <Text color="black" fontWeight="Medium" fontSize={14}>
              {dealer}
            </Text>
            <Text color="#909090" fontWeight="Regular" fontSize={10}>
              {t('deals.card.dealer')}
            </Text>
          </S.DealerContainer>
        </S.FooterContainer>
      </SpacingLayout>
    </S.CardContainer>
  );
};

export default DealCard;
