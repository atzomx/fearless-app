import React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from 'styled-components/native';
import yup from 'yup';

import { HeaderBar, InputControl } from '@core/components';
import { useRecoveryPassMutation } from '@core/graphql';
import { useNavigate } from '@core/hooks';
import { KeyboardAvoidLayout, SafeLayout } from '@core/layouts';
import { Button, Container, InputText, Text } from '@core/ui';

import AUTH_ROUTES from '@e/auth/constants/routes';
import forgotSchema from '@e/auth/schemas/forgot.schema';

type TForm = yup.InferType<typeof forgotSchema>;

const ForgotScreen = () => {
  const navigator = useNavigate();
  const { t } = useTranslation();
  const theme = useTheme();
  const [recoveryPassword, { loading }] = useRecoveryPassMutation();

  const onSubmit = ({ userName }: TForm) => {
    recoveryPassword({
      variables: {
        userRecoveryInput: {
          email: userName,
        },
      },
      onCompleted() {
        navigator.navigate(AUTH_ROUTES.code, {
          email: userName,
        });
      },
    });
  };

  const { control, handleSubmit } = useForm<TForm>({
    resolver: yupResolver(forgotSchema),
    defaultValues: { userName: '' },
    mode: 'onBlur',
  });

  const goSignIn = async () => {
    navigator.goBack();
  };

  return (
    <SafeLayout>
      <KeyboardAvoidLayout>
        <SafeAreaView>
          <HeaderBar onBack={goSignIn} />
          <Container p={2} mv={2} spacing={0}>
            <Text
              fontSize={24}
              fontWeight="SemiBold"
              color={theme.pallete.colors.black}>
              {t('auth.forgot.text.gretting')}
            </Text>
            <Text
              fontSize={16}
              fontWeight="Regular"
              color={theme.pallete.grey[500]}>
              {t('auth.forgot.text.recovery')}
            </Text>
          </Container>
          <Container fullHeight spacing={2} p={2} direction="column">
            <InputControl
              component={InputText}
              control={control}
              name="userName"
              label={t('auth.forgot.input.name')}
              color="secondary"
              required
            />
          </Container>
        </SafeAreaView>
      </KeyboardAvoidLayout>
      <SafeAreaView edges={['bottom']}>
        <Container fullWidth p={2} flexDirection="row">
          <Button
            disabled={loading}
            onPress={handleSubmit(onSubmit)}
            title={t('auth.forgot.text.action')}
          />
        </Container>
      </SafeAreaView>
    </SafeLayout>
  );
};

export default ForgotScreen;
