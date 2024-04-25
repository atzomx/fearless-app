import React, { forwardRef } from 'react';
import { View } from 'react-native';

import { useTheme } from 'styled-components/native';

import { FilterIcon } from '@core/icons';
import { SearchBar } from '@core/ui';

import * as S from './DealFilters.style';

export type DealFiltersProps = {
  onPress: () => void;
};

const DealFilters = forwardRef<View, DealFiltersProps>(({ onPress }, ref) => {
  const theme = useTheme();
  return (
    <S.Container ref={ref}>
      <SearchBar />
      <S.IconContainer onPress={onPress}>
        <FilterIcon width={20} height={20} color={theme.palette.common.black} />
      </S.IconContainer>
    </S.Container>
  );
});

export default DealFilters;
