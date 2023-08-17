import React, { FC } from 'react';
import { StyleSheet } from 'react-native';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

const SafeLayout: FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaView style={styles.container}>{children}</SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default SafeLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  area: {
    flex: 1,
    backgroundColor: 'green',
  },
});
