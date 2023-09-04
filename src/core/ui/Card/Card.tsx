import React, { FC } from 'react';
import { ViewProps } from 'react-native';

import { Shadow } from 'react-native-shadow-2';

import * as S from './Card.style';

const Card: FC<ViewProps> = ({ children, ...props }) => {
  return (
    <Shadow startColor="#efefef75" offset={[0, 0]}>
      <S.Container {...props}>{children}</S.Container>
    </Shadow>
  );
};

export default Card;
