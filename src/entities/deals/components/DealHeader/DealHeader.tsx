import React, { forwardRef } from 'react';
import { View, ViewProps } from 'react-native';

import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components/native';

import { Text } from '@core/ui';

import * as S from './DealHeader.style';

type DealHeaderProps = ViewProps;

const DealHeader = forwardRef<View, DealHeaderProps>((props, ref) => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <View {...props} ref={ref}>
      <Text align="center" color="black" fontWeight="SemiBold" fontSize={28}>
        {t('deals.screen.title')}
      </Text>
      <S.TextSecondary
        align="center"
        color={theme.pallete.grey[500]}
        fontWeight="Regular"
        fontSize={16}>
        {t('deals.screen.subtitle')}
      </S.TextSecondary>
    </View>
  );
});

export default DealHeader;
