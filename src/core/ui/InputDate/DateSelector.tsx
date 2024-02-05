import React, {
  PropsWithChildren,
  forwardRef,
  useImperativeHandle,
  useMemo,
  useState,
} from 'react';
import { StyleSheet } from 'react-native';

import { useModal } from '@core/hooks';
import DateUtils from '@core/utils/DateUtils';

import { DAYS, MONTHS, getYears } from './Date.constants';
import * as S from './InputDate.styles';

import Button from '../Button';
import Container from '../Container';
import { InputBaseProps, RefElement, defaultInputEvent } from '../InputBase';
import Modal from '../Modal';
import WhelSelector from '../WhelSelector';

function Selector(
  {
    onBlur,
    onFocus,
    value,
    onChangeText,
  }: PropsWithChildren<Omit<InputBaseProps<Date>, 'children'>>,
  ref: React.Ref<RefElement>,
) {
  const currentDate = useMemo(
    () => DateUtils.toIndexable(value as Date),
    [value],
  );

  const [dayIndex, setDayIndex] = useState<number>(currentDate.day);
  const [monthIndex, setMonthIndex] = useState<number>(currentDate.month);
  const [yearIndex, setYearIndex] = useState<number>(currentDate.year);

  const { isOpen, open, close } = useModal();

  const YEARS = useMemo(() => getYears(), []);

  const handleOnClose = () => {
    close();
    onBlur?.(defaultInputEvent);
  };

  const onHandleSelect = () => {
    onChangeText?.(undefined);
    handleOnClose();
  };

  const handleOnOpen = () => {
    open();
    onFocus?.(defaultInputEvent);
  };

  useImperativeHandle(ref, () => ({
    focus: handleOnOpen,
  }));

  const CURRENT_INDEX_DATE = useMemo(() => {
    const day = DAYS[dayIndex].value;
    const month = MONTHS[monthIndex].value;
    const year = YEARS[yearIndex].value;
    return { year, month, day };
  }, [dayIndex, monthIndex, yearIndex, YEARS]);

  const FORMATED = useMemo(
    () =>
      [
        CURRENT_INDEX_DATE.day,
        CURRENT_INDEX_DATE.month,
        CURRENT_INDEX_DATE.year,
      ].join('/'),
    [CURRENT_INDEX_DATE],
  );

  const IS_VALID = useMemo(
    () => DateUtils.isValid(CURRENT_INDEX_DATE),
    [CURRENT_INDEX_DATE],
  );

  return (
    <>
      <S.SelectText>{FORMATED}</S.SelectText>
      <Modal open={isOpen} onClose={close} title="Selecciona">
        <Container justifyContent="center" direction="row" spacing={2} ph={6}>
          <WhelSelector
            data={DAYS}
            onChangeIndex={index => setDayIndex(index)}
            index={dayIndex}
            style={styles.whell}
            inverted
          />
          <WhelSelector
            data={MONTHS}
            onChangeIndex={index => setMonthIndex(index)}
            index={monthIndex}
            style={styles.whell}
            inverted
          />
          <WhelSelector
            data={YEARS}
            onChangeIndex={index => setYearIndex(index)}
            index={yearIndex}
            style={styles.year}
            inverted
          />
        </Container>
        <Container ph={2} pv={1} spacing={2}>
          <Button disable={!IS_VALID} onPress={onHandleSelect} title="Done" />
        </Container>
      </Modal>
    </>
  );
}

const DateSelector = forwardRef<
  RefElement,
  PropsWithChildren<Omit<InputBaseProps<Date>, 'children'>>
>(Selector);

export default DateSelector;

const styles = StyleSheet.create({
  whell: {
    width: '30%',
  },
  year: {
    width: '40%',
  },
});
