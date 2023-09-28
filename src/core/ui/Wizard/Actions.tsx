import React, { FC, PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';

import { spacingSingle } from '@core/theme/utils';

import Container from '../Container';

const Actions: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container style={styles.container} fullWidth ph={3}>
      {children}
    </Container>
  );
};

Actions.displayName = 'Wizard.Actions';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: spacingSingle(5),
    zIndex: 1,
  },
});

export default Actions;
