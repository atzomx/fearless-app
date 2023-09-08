import React, { FC } from 'react';
import { ViewProps } from 'react-native';

import * as S from './Card.style';

const Card: FC<ViewProps> = ({ children, ...props }) => {
  return (
    <S.Shadow startColor="#efefef75" offset={[0, 0]}>
      <S.Container {...props} style={props.style}>
        {children}
      </S.Container>
    </S.Shadow>
  );
};

export default Card;
