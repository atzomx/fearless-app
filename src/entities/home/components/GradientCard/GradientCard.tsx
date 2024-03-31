import { Container, Text } from '@core/ui';
import React, { PropsWithChildren, ReactNode } from 'react';
import { GestureResponderEvent, Pressable } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SvgProps } from 'react-native-svg';
import { useTheme } from 'styled-components/native';

type GradientCardProps = {
  header: ReactNode;
  icon: (props: SvgProps) => JSX.Element;
  amount: ReactNode;
  currency: string;
  colors: string[];
};

const GradientCardRow = ({ children }: PropsWithChildren) => (
  <Container direction="row" alignItems="center" justifyContent="space-between">
    {children}
  </Container>
);

const GradientCard = ({
  children,
  colors,
  onPress,
}: PropsWithChildren<{
  colors: string[];
  onPress?: (event: GestureResponderEvent) => void;
}>) => {
  return (
    <Pressable onPress={onPress} style={{ flex: 1 }}>
      <LinearGradient
        useAngle
        angle={90}
        style={{ borderRadius: 20 }}
        colors={colors}>
        <Container minHeight={120} p={2} justifyContent="space-between">
          {children}
        </Container>
      </LinearGradient>
    </Pressable>
  );
};

GradientCard.Row = GradientCardRow;

export default GradientCard;
