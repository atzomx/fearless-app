import React, { FC } from 'react';
import { TouchableOpacityProps } from 'react-native';

import * as S from './Card.style';

const Card: FC<TouchableOpacityProps> = ({ children, ...props }) => {
  return (
    <S.Shadow startColor="#efefef75" offset={[0, 0]}>
      <S.Container activeOpacity={0.6} {...props} style={props.style}>
        {children}
      </S.Container>
    </S.Shadow>
  );
};

export default Card;
