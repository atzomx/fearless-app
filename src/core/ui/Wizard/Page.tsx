import React, { FC } from 'react';
import { Dimensions, View, StyleSheet } from 'react-native';

const { width: WIZARD_PAGE_WIDTH, height: WIZARD_PAGE_HEIGHT } =
  Dimensions.get('window');

const Page: FC<React.PropsWithChildren> = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    height: WIZARD_PAGE_HEIGHT,
    width: WIZARD_PAGE_WIDTH,
  },
});

export { WIZARD_PAGE_HEIGHT, WIZARD_PAGE_WIDTH };
export default Page;
