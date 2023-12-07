import React, { FC, PropsWithChildren } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

import { spacingSingle } from '@core/theme/utils';

import Container from '../Container';

const Actions: FC<PropsWithChildren> = ({ children }) => {
  return (
    <SafeAreaView>
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
