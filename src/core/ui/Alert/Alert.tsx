import React, { PropsWithChildren } from 'react';
import { Modal } from 'react-native';

import * as S from './Alert.style';

import Container from '../Container';
import Text from '../Text';

type AlertProps = {
  variant?: S.ColorVariant;
};

const Title = ({ children }: PropsWithChildren) => (
  <Text align="center" color="white" fontSize={20} fontWeight="Medium">
    {children}
  </Text>
);

const Subtitle = ({ children }: PropsWithChildren) => (
  <Text align="center" color="white" fontSize={16} fontWeight="Regular">
    {children}
  </Text>
);

const Alert = ({
  variant = 'info',
  children,
}: PropsWithChildren<AlertProps>) => {
  return (
    <Modal
      transparent
      animationType="none"
      visible={true}
      statusBarTranslucent
      presentationStyle="overFullScreen">
      <S.Content variant={variant}>
        <Container spacing={2}>{children}</Container>
      </S.Content>
    </Modal>
  );
};

export default Object.assign(Alert, { Title, Subtitle });
