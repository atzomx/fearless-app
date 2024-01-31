import React, {
  PropsWithChildren,
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useState,
} from 'react';
import { NativeSyntheticEvent } from 'react-native';

import { useModal } from '@core/hooks';

import * as S from './InputSelect.style';
import { OptionProps } from './Option';

import Button from '../Button';
import Container from '../Container';
import { InputBaseProps } from '../InputBase';
import Modal from '../Modal';
import WhelSelector from '../WhelSelector';

type RefElement = { focus: () => void };

const defaultEvent: NativeSyntheticEvent<{ target: number }> = {
  nativeEvent: {
    target: 0,
  },
  currentTarget: 0,
  target: 0,
  bubbles: false,
  cancelable: false,
  defaultPrevented: false,
  eventPhase: 0,
  isTrusted: false,
  preventDefault: function (): void {
    throw new Error('Function not implemented.');
  },
  isDefaultPrevented: function (): boolean {
    throw new Error('Function not implemented.');
  },
  stopPropagation: function (): void {
    throw new Error('Function not implemented.');
  },
  isPropagationStopped: function (): boolean {
    throw new Error('Function not implemented.');
  },
  persist: function (): void {
    throw new Error('Function not implemented.');
  },
  timeStamp: 0,
  type: '',
};

const Select = forwardRef<
  RefElement,
  PropsWithChildren<Omit<InputBaseProps, 'children'>>
>(
  (
    {
      onBlur,
      onFocus,
      placeholder,
      value,
      onChangeText,
      placeholderTextColor,
      children,
    },
    ref,
  ) => {
    const { isOpen, open, close } = useModal();
    const [index, setIndex] = useState<number>(0);

    const DATA = useMemo(
      () => [
        {
          value: undefined,
          label: 'Unselect',
        },
        ...React.Children.map(
          children as any,
          ({ props }: { props: OptionProps }) => ({
            value: props.value,
            label: props.children,
          }),
        ),
      ],
      [children],
    );

    const handleOnClose = () => {
      close();
      onBlur?.(defaultEvent);
    };

    const handleOnOpen = () => {
      open();
      onFocus?.(defaultEvent);
    };

    useImperativeHandle(ref, () => ({
      focus: handleOnOpen,
    }));

    const onHandleSelect = () => {
      onChangeText?.(DATA[index].value);
      handleOnClose();
    };

    const handleOnChangeValue = useCallback((newIndex: number) => {
      setIndex(newIndex);
    }, []);

    const INDEX = useMemo(
      () => DATA.findIndex(item => item.value === value),
      [value, DATA],
    );

    const VALUE = useMemo(() => {
      if (INDEX === -1) return null;
      return DATA[INDEX];
    }, [INDEX, DATA]);

    return (
      <>
        <S.SelectText color={VALUE ? undefined : placeholderTextColor}>
          {VALUE?.value ? VALUE.label ?? placeholder : undefined}
        </S.SelectText>
        <Modal open={isOpen} onClose={handleOnClose} title="Selecciona">
          <WhelSelector
            data={DATA}
            onChangeIndex={handleOnChangeValue}
            index={index}
          />
          <Container ph={2} pv={1}>
            <Button onPress={onHandleSelect} title="Done" />
          </Container>
        </Modal>
      </>
    );
  },
);

export default Select;
