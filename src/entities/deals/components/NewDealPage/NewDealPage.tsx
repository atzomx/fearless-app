import React, { FC, PropsWithChildren } from 'react';

import { BackButton } from '@core/components';
import { SafeLayout, ScrollLayout } from '@core/layouts';
import { Wizard, Text } from '@core/ui';

import * as S from './NewDealPage.style';

type NewDealPageProps = PropsWithChildren & {
  title?: string;
  subtitle?: string;
};

const NewDealPage: FC<NewDealPageProps> = ({ title, subtitle, children }) => {
  return (
    <Wizard.Page>
      <SafeLayout>
        <ScrollLayout p={2}>
          <BackButton />
          <S.Container>
            <Text fontWeight="SemiBold" fontSize={28} color="#000000">
              {title}
            </Text>
            <Text
              align="center"
              fontWeight="Regular"
              fontSize={16}
              color="#909090">
              {subtitle}
            </Text>
          </S.Container>
          {children}
        </ScrollLayout>
      </SafeLayout>
    </Wizard.Page>
  );
};

export default NewDealPage;
