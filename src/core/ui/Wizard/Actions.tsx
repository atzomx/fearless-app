import React, { FC, PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { spacingSingle } from '@core/theme/utils';

import Container from '../Container';

const Actions: FC<PropsWithChildren> = ({ children }) => {
  return (
    <SafeAreaView edges={['bottom']}>
      <Container style={styles.container} fullWidth ph={3}>
        {children}
      </Container>
    </SafeAreaView>
  );
};

Actions.displayName = 'Wizard.Actions';

const styles = StyleSheet.create({
  container: {
    marginBottom: spacingSingle(2),
  },
});

export default Actions;
