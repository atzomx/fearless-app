import React, { FC } from 'react';

import { useTheme } from 'styled-components/native';

import { FilterIcon } from '@core/icons';

import * as S from './DealFilters.style';

export type DealFiltersProps = {
  onPress: () => void;
};

const DealFilters: FC<DealFiltersProps> = ({ onPress }) => {
  const theme = useTheme();
  return (
    <S.Container onPress={onPress}>
      <FilterIcon width={20} height={20} color={theme.pallete.common.black} />
    </S.Container>
  );
};

export default DealFilters;
