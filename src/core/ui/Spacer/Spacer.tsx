import React, { FC } from 'react';

import * as S from './Spacer.styled';

export type SpacerProps = {
  spacing?: number;
};

const Spacer: FC<SpacerProps> = ({ spacing = 0 }) => {
  return <S.Spacer spacing={spacing} />;
};

export default Spacer;
