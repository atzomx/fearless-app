import React, { FC } from 'react';
import { StyleSheet } from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';

const ScrollLayout: FC<React.PropsWithChildren> = ({ children }) => {
  return <ScrollView style={styles.container}>{children}</ScrollView>;
};

export default ScrollLayout;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
  },
});
