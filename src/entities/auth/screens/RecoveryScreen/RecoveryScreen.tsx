import React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from 'styled-components/native';
import yup from 'yup';

import { HeaderBar, InputControl } from '@core/components';
import { useRecoveryPassConfirmMutation } from '@core/graphql';
import { useNavigate } from '@core/hooks';
import { KeyboardAvoidLayout, SafeLayout } from '@core/layouts';
import { Button, Container, InputText, Text } from '@core/ui';

import AUTH_ROUTES from '@e/auth/constants/routes';
import recoverySchema from '@e/auth/schemas/recovery.schema';

type TForm = yup.InferType<typeof recoverySchema>;

type ParamList = {
  RecoveryScreen: {
    email: string;
    token: string;
  };
};

const RecoveryScreen = () => {
  const navigator = useNavigate();
  const { t } = useTranslation();
  const theme = useTheme();
  const route = useRoute<RouteProp<ParamList>>();
  const [recoveryPasswordConfirm, { loading }] =
    useRecoveryPassConfirmMutation();

  const email = route.params.email;
  const token = route.params.token;
  console.log(route.params);

  const onSubmit = ({ password }: TForm) => {
    recoveryPasswordConfirm({
      variables: {
        userRecoveryInput: {
          email,
          tokenOTP: token,
          newPassword: password,
        },
      },
      onCompleted() {
        navigator.navigate(AUTH_ROUTES.login);
      },
    });
  };

  const { control, handleSubmit } = useForm<TForm>({
    resolver: yupResolver(recoverySchema),
    defaultValues: { confirmation: '', password: '' },
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
              color={theme.palette.colors.black}>
              {t('auth.recovery.text.title')}
            </Text>
            <Text
              fontSize={16}
              fontWeight="Regular"
              color={theme.palette.grey[500]}>
              {t('auth.forgot.text.subtitle')}
            </Text>
          </Container>
          <Container fullHeight spacing={2} p={2} direction="column">
            <InputControl
              component={InputText}
              control={control}
              name="password"
              label={t('auth.recovery.input.password')}
              color="secondary"
              required
            />
            <InputControl
              component={InputText}
              control={control}
              name="confirmation"
              label={t('auth.recovery.input.confirm-password')}
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
            title={t('auth.password.text.action')}
          />
        </Container>
      </SafeAreaView>
    </SafeLayout>
  );
};

export default RecoveryScreen;
