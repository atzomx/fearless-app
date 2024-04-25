import React from 'react';

import { useTranslation } from 'react-i18next';

import { ArrowTrendingDownIcon, PlusIcon, QRCodeIcon } from '@core/icons';
import theme from '@core/theme';
import { Container, Text } from '@core/ui';

import GradientCard from '../GradientCard';

const HomeGradients = () => {
  const { t } = useTranslation('', { keyPrefix: 'home.home' });

  return (
    <>
      <GradientCard colors={['#232526', '#414345']}>
        <GradientCard.Row>
          <Container
            justifyContent="center"
            alignItems="center"
            backgroundColor={theme.fade(theme.palette.colors.white, 0.3)}
            height={48}
            width={48}
            borderRadius={48 / 2}>
            <ArrowTrendingDownIcon color={theme.palette.colors.white} />
          </Container>
          <Container direction="row" spacing={1} alignItems="center">
            <Text variant="h3" color={theme.palette.colors.white}>
              1,500.00
            </Text>
            <Text color={theme.palette.colors.white}>USD</Text>
          </Container>
        </GradientCard.Row>
        <GradientCard.Row>
          <Text
            fontWeight="SemiBold"
            fontSize={16}
            color={theme.palette.colors.white}>
            {t('cards.income')}
          </Text>
        </GradientCard.Row>
      </GradientCard>
      <Container direction="row" spacing={1}>
        <GradientCard colors={['#6157ff', '#ee49fd']}>
          <GradientCard.Row>
            <Container
              justifyContent="center"
              alignItems="center"
              backgroundColor={theme.fade(theme.palette.colors.white, 0.3)}
              height={48}
              width={48}
              borderRadius={48 / 2}>
              <PlusIcon color={theme.palette.colors.white} />
            </Container>
          </GradientCard.Row>
          <GradientCard.Row>
            <Text
              fontWeight="SemiBold"
              fontSize={16}
              color={theme.palette.colors.white}>
              {t('cards.new')}
            </Text>
          </GradientCard.Row>
        </GradientCard>
        <GradientCard colors={['#6157ff', '#ee49fd']}>
          <GradientCard.Row>
            <Container
              justifyContent="center"
              alignItems="center"
              backgroundColor={theme.fade(theme.palette.colors.white, 0.3)}
              height={48}
              width={48}
              borderRadius={48 / 2}>
              <QRCodeIcon color={theme.palette.colors.white} />
            </Container>
          </GradientCard.Row>
          <GradientCard.Row>
            <Text
              fontWeight="SemiBold"
              fontSize={16}
              color={theme.palette.colors.white}>
              {t('cards.join')}
            </Text>
          </GradientCard.Row>
        </GradientCard>
      </Container>
    </>
  );
};

export default HomeGradients;
