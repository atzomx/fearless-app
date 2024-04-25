import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';

import { RouteProp, useRoute } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from 'styled-components/native';

import { HeaderBar } from '@core/components';
import { useRecoveryPassVerifyOtpMutation } from '@core/graphql';
import { useNavigate, useTimer } from '@core/hooks';
import { KeyboardAvoidLayout, SafeLayout } from '@core/layouts';
import { Container, Text } from '@core/ui';

import AUTH_ROUTES from '@e/auth/constants/routes';

const CELL_COUNT = 6;

type ParamList = {
  CodeScreen: {
    email: string;
  };
};

const CodeScreen = () => {
  const navigator = useNavigate();
  const route = useRoute<RouteProp<ParamList, 'CodeScreen'>>();
  const theme = useTheme();
  const { t } = useTranslation();
  const [verifyOtp] = useRecoveryPassVerifyOtpMutation();

  const [value, setValue] = useState('');
  const timer = useTimer(5 * 60);
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const email = route.params.email ?? '';

  const onHandleVerifyOpt = useCallback(() => {
    if (value.length !== 6) return;
    verifyOtp({
      variables: {
        userRecoveryVerifyOtpInput: {
          email,
          tokenOTP: value,
        },
      },
      onCompleted(data) {
        navigator.navigate(AUTH_ROUTES.recovery, {
          token: data.recoveryPassVerifyOtp.token,
          email,
        });
      },
    });
  }, [navigator, value, email, verifyOtp]);

  const goSignIn = async () => {
    navigator.goBack();
  };

  useEffect(() => {
    onHandleVerifyOpt();
  }, [onHandleVerifyOpt]);

  return (
    <SafeLayout>
      <KeyboardAvoidLayout>
        <SafeAreaView>
          <HeaderBar onBack={goSignIn} />
          <Container p={2} mv={2} spacing={0}>
            <Text
              fontSize={24}
              fontWeight="SemiBold"
              color={theme.palette.colors.black}>
              {t('auth.code.text.title')}
            </Text>
            <Text
              fontSize={16}
              fontWeight="Regular"
              color={theme.palette.grey[500]}>
              {t('auth.code.text.subtitle')}
            </Text>
          </Container>
          <Container fullHeight spacing={2} p={2} direction="column">
            <CodeField
              ref={ref}
              {...props}
              value={value}
              onChangeText={setValue}
              cellCount={CELL_COUNT}
              rootStyle={styles.codeFieldRoot}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              autoComplete="sms-otp"
              renderCell={({ index, symbol, isFocused }) => (
                <Text
                  key={index}
                  style={[styles.cell, isFocused && styles.focusCell]}
                  onLayout={getCellOnLayoutHandler(index)}>
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              )}
            />
            <Text>{timer.formatted}</Text>
          </Container>
        </SafeAreaView>
      </KeyboardAvoidLayout>
    </SafeLayout>
  );
};

const styles = StyleSheet.create({
  root: { flex: 1, padding: 0 },
  title: { textAlign: 'center', fontSize: 40 },
  codeFieldRoot: { gap: 5 },
  cell: {
    flex: 1,
    maxWidth: 64,
    height: 64,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: '#DFDFDF',
    textAlign: 'center',
    borderRadius: 12,
    textAlignVertical: 'center',
  },
  focusCell: {
    borderColor: '#000',
  },
});

export default CodeScreen;
