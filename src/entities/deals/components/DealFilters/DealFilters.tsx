import React from 'react';

import { useTheme } from 'styled-components/native';

import { FilterIcon } from '@core/icons';

import * as S from './DealFilters.style';

const DealFilters = () => {
  const theme = useTheme();
  return (
    <S.Container>
      <FilterIcon width={20} height={20} color={theme.pallete.common.black} />
    </S.Container>
  );
};

export default DealFilters;
