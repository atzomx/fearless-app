import React, { FC } from 'react';

import { Container, Text } from '@core/ui';

import * as S from './NewDealHeader.style';

type NewDealHeaderProps = {
  title: string;
  subtitle: string;
};

const NewDealHeader: FC<NewDealHeaderProps> = ({ title, subtitle }) => {
  return (
    <Container p={2}>
      <S.Header>
        <Text fontWeight="SemiBold" fontSize={28} color="#000000">
          {title.length < 35 ? `${title}` : `${title.substring(0, 32)}...`}
        </Text>
        <Text align="center" fontWeight="Regular" fontSize={16} color="#909090">
          {subtitle.length < 60
            ? `${subtitle}`
            : `${subtitle.substring(0, 60)}...`}
        </Text>
      </S.Header>
    </Container>
  );
};

export default NewDealHeader;
