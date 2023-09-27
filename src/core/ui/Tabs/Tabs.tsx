import React, { FC } from 'react';
import { ViewProps } from 'react-native';

import { ScrollLayout } from '@core/layouts';

import * as S from './Tabs.style';

import Container from '../Container';

export type TabsProps = React.PropsWithChildren &
  ViewProps & {
    value: number;
    onChange: (value: number) => void;
    actions?: React.ReactNode;
  };

const Tabs: FC<TabsProps> = ({
  value,
  onChange,
  children,
  actions,
  ...props
}) => {
  const Childs = React.Children.toArray(children);
  return (
    <S.TabsContainer {...props}>
      <ScrollLayout horizontal showsHorizontalScrollIndicator={false}>
        <Container direction="horizontal">
          {Childs.map((child, index) => {
            return (
              <S.TabContent
                key={`tab-content-${index}`}
                onPress={() => onChange(index)}
                active={index === value}>
                {React.cloneElement(child as React.ReactElement, {
                  active: index === value,
                })}
              </S.TabContent>
            );
          })}
        </Container>
      </ScrollLayout>
      <S.ActionsContainer>{actions}</S.ActionsContainer>
    </S.TabsContainer>
  );
};

export default Tabs;
