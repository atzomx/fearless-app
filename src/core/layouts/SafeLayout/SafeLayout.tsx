import React, { FC } from 'react';
import { StatusBar, StyleSheet } from 'react-native';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaViewProps } from 'react-native-safe-area-context';
import { useTheme } from 'styled-components/native';

type SafeLayoutProps = React.PropsWithChildren & {
  sx?: Pick<SafeAreaViewProps, 'style'>['style'];
};

const SafeLayout: FC<SafeLayoutProps> = ({ children }) => {
  const theme = useTheme();
  return (
    <GestureHandlerRootView
      style={[styles.container, { backgroundColor: theme.pallete.background }]}>
      <StatusBar
        animated
        translucent
        backgroundColor={theme.pallete.common.white}
        barStyle="dark-content"
      />
      {children}
    </GestureHandlerRootView>
  );
};

export default SafeLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
