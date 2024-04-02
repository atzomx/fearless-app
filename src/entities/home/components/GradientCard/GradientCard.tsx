import React, { PropsWithChildren } from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import { Container } from '@core/ui';

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
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={styles.touchable}>
      <LinearGradient
        useAngle
        angle={90}
        style={styles.gradient}
        colors={colors}>
        <Container minHeight={120} p={2} justifyContent="space-between">
          {children}
        </Container>
      </LinearGradient>
    </TouchableOpacity>
  );
};

GradientCard.Row = GradientCardRow;

const styles = StyleSheet.create({
  touchable: {
    flex: 1,
  },
  gradient: {
    borderRadius: 20,
  },
});

export default GradientCard;
