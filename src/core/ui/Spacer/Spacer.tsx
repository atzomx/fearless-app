import React, { FC } from 'react';

import * as S from './Spacer.styled';

export type SpacerProps = {
  spacing?: number;
  direction?: 'horizontal' | 'vertical';
};

const Spacer: FC<SpacerProps> = ({ spacing = 0, direction = 'vertical' }) => {
  return <S.Spacer spacing={spacing} direction={direction} />;
};

export default Spacer;
