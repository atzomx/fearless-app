import React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from 'styled-components/native';
import * as yup from 'yup';

import { InputControl } from '@core/components';
import { useSignInMutation } from '@core/graphql';
import { useNavigate } from '@core/hooks';
import { FacebookIcon, GoogleIcon } from '@core/icons';
import { ContentLayout, KeyboardAvoidLayout, SafeLayout } from '@core/layouts';
import { Button, Container, IconButton, InputText, Text } from '@core/ui';

import AUTH_ROUTES from '@e/auth/constants/routes';
import loginSchema from '@e/auth/schemas/login.schema';
import HOME_ROUTES from '@e/home/constants/routes';

type TForm = yup.InferType<typeof loginSchema>;

const SignInScreen = () => {
  const [userLogin] = useSignInMutation();
  const theme = useTheme();
  const navigator = useNavigate();
  const { t } = useTranslation();

  const { control, handleSubmit } = useForm<TForm>({
    resolver: yupResolver(loginSchema),
    defaultValues: { userName: '', password: '' },
    mode: 'onBlur',
  });

  const onSubmit = (values: TForm) => {
    const user = { email: values.userName, password: values.password };

    userLogin({
      variables: { user },
      onCompleted() {
        navigator.push(HOME_ROUTES.home);
      },
      onError(error, clientOptions) {
        console.log({ error, clientOptions });
      },
    });
  };

  const goSignUp = async () => {
    navigator.push(AUTH_ROUTES.signup);
  };
  const goRecovery = async () => {
    navigator.push(AUTH_ROUTES.forgot);
  };

  return (
    <ContentLayout>
      <SafeLayout>
        <KeyboardAvoidLayout>
          <SafeAreaView>
            <Container mt={8} mb={5}>
              <Text
                fontSize={60}
                fontWeight="Bold"
                align="center"
                color="black">
                DealZ
              </Text>
              <Text fontSize={24} fontWeight="SemiBold" align="center">
                {t('auth.signin.text.gretting')}
              </Text>
              <Text fontSize={16} fontWeight="Regular" align="center">
                {t('auth.signin.text.signin')}
              </Text>
            </Container>
            <Container fullHeight spacing={2} p={2} direction="column">
              <InputControl
                component={InputText}
                control={control}
                name="userName"
                label={t('auth.signin.input.name')}
                color="secondary"
                required
              />
              <InputControl
                component={InputText}
                control={control}
                name="password"
                label={t('auth.signin.input.password')}
                color="secondary"
                secureTextEntry
                required
              />
              <Text
                fontWeight="SemiBold"
                fontSize={12}
                align="right"
                color="black"
                onPress={goRecovery}>
                {t('auth.signin.text.recover')}
              </Text>
            </Container>
          </SafeAreaView>
        </KeyboardAvoidLayout>
        <SafeAreaView edges={['bottom']}>
          <Container spacing={2} fullWidth p={2} flexDirection="row">
            <Button
              onPress={handleSubmit(onSubmit)}
              title={t('auth.signin.text.action')}
            />
            <Container spacing={4} direction="row" justifyContent="center">
              <IconButton color="#0165E1">
                <FacebookIcon />
              </IconButton>
              <IconButton color={theme.pallete.grey[100]}>
                <GoogleIcon />
              </IconButton>
            </Container>
            <Text
              fontSize={12}
              fontWeight="Regular"
              align="center"
              color={theme.pallete.grey[500]}>
              {t('auth.signin.text.new_user')}{' '}
              <Text
                onPress={goSignUp}
                fontSize={12}
                fontWeight="SemiBold"
                color={theme.pallete.common.black}>
                {t('auth.signin.text.create_account')}
              </Text>
            </Text>
          </Container>
        </SafeAreaView>
      </SafeLayout>
    </ContentLayout>
  );
};

export default SignInScreen;
