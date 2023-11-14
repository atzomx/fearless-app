import React, { FC } from 'react';
import { ViewProps } from 'react-native';

import * as S from './Tabs.style';

import Container from '../Container';

export type TabsProps = React.PropsWithChildren &
  ViewProps & {
    value: number;
    onChange: (value: number) => void;
  };

const Tabs: FC<TabsProps> = ({ value, onChange, children, ...props }) => {
  const Childs = React.Children.toArray(children);
  return (
    <S.TabsContainer {...props}>
      <S.ScrollLayout horizontal showsHorizontalScrollIndicator={false}>
        <Container direction="row">
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
      </S.ScrollLayout>
    </S.TabsContainer>
  );
};

export default Tabs;
