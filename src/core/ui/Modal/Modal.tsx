import React, { FC, PropsWithChildren } from 'react';
import { Modal as RNModal } from 'react-native';

import * as S from './Modal.style';

import Container from '../Container';
import Text from '../Text';

type ModalProps = PropsWithChildren & {
  open: boolean;
  onClose: () => void;
  title?: string;
};

const Modal: FC<ModalProps> = ({ open, onClose, title, children }) => {
  return (
    <RNModal
      transparent
      animationType="slide"
      visible={open}
      onRequestClose={onClose}>
      <S.Container activeOpacity={1} onPress={onClose}>
        <S.Modal onStartShouldSetResponder={() => true}>
          <Container p={2}>
            <S.Line />
            {title && (
              <Text align="center" fontWeight="Medium" fontSize={14}>
                {title}
              </Text>
            )}
            {children}
          </Container>
        </S.Modal>
      </S.Container>
    </RNModal>
  );
};

export default Modal;
