import React from 'react';
import { View } from 'react-native';

import { useTheme } from 'styled-components/native';

import { Text } from '@core/ui';

import * as S from './DealHeader.style';

const DealHeader = () => {
  const theme = useTheme();
  return (
    <View>
      <Text align="center" color="black" fontWeight="SemiBold" fontSize={28}>
        Tratos
      </Text>
      <S.TextSecondary
        align="center"
        color={theme.pallete.grey[500]}
        fontWeight="Regular"
        fontSize={16}>
        ¡Echa un ojo a tu fiesta de negocios!
      </S.TextSecondary>
    </View>
  );
};

export default DealHeader;
