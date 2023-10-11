import React, { FC, PropsWithChildren, useCallback } from 'react';

import { useTheme } from 'styled-components/native';

import { BackSpaceIcon } from '@core/icons';
import { Container, Text } from '@core/ui';
import Money from '@core/utils/Money';

import * as S from './NumberKeyboard.style';

type KeyboardButton = PropsWithChildren & {
  text?: string;
  onPress?: () => void;
};

const KeyButton: React.FC<KeyboardButton> = ({ text, children, onPress }) => {
  const theme = useTheme();
  return (
    <S.Button onPress={onPress}>
      {text && (
        <Text fontWeight="Medium" fontSize={36} color={theme.pallete.grey[500]}>
          {text}
        </Text>
      )}
      {children}
    </S.Button>
  );
};

export type NumberKeyboardProps = {
  value?: string;
  onChangeText?: (value: string) => void;
  title?: string;
  maxAmount?: number;
};

const NumberKeyboard: FC<NumberKeyboardProps> = ({
  title,
  maxAmount = 10000,
  value = '0',
  onChangeText,
}) => {
  const theme = useTheme();

  const deleteLast = useCallback(() => {
    onChangeText?.(value.slice(0, -1));
  }, [onChangeText, value]);

  const buildNumber = useCallback(
    (newNumber: string) => () => {
      const alreadyIncludedDot = value.includes('.');
      const alreadyHasTwoDecimals = (value?.split('.')?.[1]?.length ?? 0) > 1;
      const alreadyStarsWithZero = value.startsWith('0');
      const equalsZero = newNumber === '0';
      const equalsDot = newNumber === '.';
      const validChar = equalsZero === !alreadyIncludedDot;
      const nonValidChar =
        alreadyIncludedDot && (equalsDot || alreadyHasTwoDecimals);
      const noValid = alreadyStarsWithZero && !validChar;

      if (nonValidChar) return;
      const buildedNum = noValid ? newNumber : value + newNumber;

      if (isNaN(+buildedNum) || +buildedNum > maxAmount) return;
      onChangeText?.(buildedNum);
    },
    [value, maxAmount, onChangeText],
  );

  return (
    <>
      {title && (
        <Container mt={2} mb={1}>
          <Text
            align="center"
            fontWeight="Regular"
            fontSize={16}
            color={theme.pallete.grey[500]}>
            {title}
          </Text>
        </Container>
      )}
      <Container mb={2}>
        <Text color="black" align="center" fontWeight="Regular" fontSize={32}>
          {Money.fromString(value, 0).toFormat()}
        </Text>
      </Container>
      <Container alignSelf="center" spacing={0}>
        <Container direction="horizontal" spacing={4}>
          <KeyButton text="1" onPress={buildNumber('1')} />
          <KeyButton text="2" onPress={buildNumber('2')} />
          <KeyButton text="3" onPress={buildNumber('3')} />
        </Container>
        <Container direction="horizontal" spacing={4}>
          <KeyButton text="4" onPress={buildNumber('4')} />
          <KeyButton text="5" onPress={buildNumber('5')} />
          <KeyButton text="6" onPress={buildNumber('6')} />
        </Container>
        <Container direction="horizontal" spacing={4}>
          <KeyButton text="7" onPress={buildNumber('7')} />
          <KeyButton text="8" onPress={buildNumber('8')} />
          <KeyButton text="9" onPress={buildNumber('9')} />
        </Container>
        <Container direction="horizontal" spacing={4}>
          <KeyButton text="." onPress={buildNumber('.')} />
          <KeyButton text="0" onPress={buildNumber('0')} />
          <KeyButton onPress={deleteLast}>
            <BackSpaceIcon
              width={36}
              height={36}
              color={theme.pallete.grey[500]}
            />
          </KeyButton>
        </Container>
      </Container>
    </>
  );
};

export default NumberKeyboard;
