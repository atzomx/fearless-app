import React, {
  PropsWithChildren,
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useState,
} from 'react';

import { useModal } from '@core/hooks';

import * as S from './InputSelect.style';
import { OptionProps } from './Option';

import Button from '../Button';
import Container from '../Container';
import { InputBaseProps, defaultInputEvent } from '../InputBase';
import Modal from '../Modal';
import WheelSelector from '../WheelSelector';

type RefElement = { focus: () => void };

const Select = forwardRef<
  RefElement,
  PropsWithChildren<Omit<InputBaseProps<string>, 'children'>>
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
      onBlur?.(defaultInputEvent);
    };

    const handleOnOpen = () => {
      open();
      onFocus?.(defaultInputEvent);
    };

    useImperativeHandle(ref, () => ({
      focus: handleOnOpen,
    }));

    const onHandleSelect = (onClose: () => void) => {
      onChangeText?.(DATA[index].value);
      onClose();
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
          {({ animatedClose }) => (
            <>
              <WheelSelector
                data={DATA}
                onChangeIndex={handleOnChangeValue}
                index={index}
              />
              <Container ph={2} pv={1}>
                <Button
                  onPress={() => onHandleSelect(animatedClose)}
                  title="Done"
                />
              </Container>
            </>
          )}
        </Modal>
      </>
    );
  },
);

export default Select;
