import React, { FC } from 'react';

import { useTheme } from 'styled-components/native';

import { FilterIcon } from '@core/icons';
import { SearchBar } from '@core/ui';

import * as S from './DealFilters.style';

export type DealFiltersProps = {
  onPress: () => void;
};

const DealFilters: FC<DealFiltersProps> = ({ onPress }) => {
  const theme = useTheme();
  return (
    <S.Container>
      <SearchBar />
      <S.IconContainer onPress={onPress}>
        <FilterIcon width={20} height={20} color={theme.pallete.common.black} />
      </S.IconContainer>
    </S.Container>
  );
};

export default DealFilters;
