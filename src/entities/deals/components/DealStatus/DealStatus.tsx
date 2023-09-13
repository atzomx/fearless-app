import React, { FC } from 'react';

import { HandFiveIcon } from '@core/icons';

import { VariantStatus } from './DealStatus.model';
import * as S from './DealStatus.style';

export type DealStatusProps = React.PropsWithChildren & {
  variant: VariantStatus;
};

const DealStatus: FC<DealStatusProps> = ({ variant, children }) => {
  return (
    <S.Container variant={variant}>
      <S.IconContainer variant={variant}>
        <HandFiveIcon height={18} width={18} color="#00546F" />
      </S.IconContainer>
      <S.Status variant={variant}>{children}</S.Status>
    </S.Container>
  );
};

export default DealStatus;
