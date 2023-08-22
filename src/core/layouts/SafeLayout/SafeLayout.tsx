import React, { FC } from 'react';
import { StyleSheet } from 'react-native';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  SafeAreaView,
  SafeAreaViewProps,
} from 'react-native-safe-area-context';

type SafeLayoutProps = React.PropsWithChildren & {
  sx?: Pick<SafeAreaViewProps, 'style'>['style'];
};

const SafeLayout: FC<SafeLayoutProps> = ({ children, sx }) => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaView style={[styles.area, sx]}>{children}</SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default SafeLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  area: {
    flex: 1,
  },
});
