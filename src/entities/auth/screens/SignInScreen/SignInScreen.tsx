import React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from 'styled-components/native';
import * as yup from 'yup';

import { InputControl } from '@core/components';
import { useAuthSignInMutation } from '@core/graphql';
import { useNavigate } from '@core/hooks';
import { FacebookIcon, GoogleIcon } from '@core/icons';
import { ContentLayout, KeyboardAvoidLayout, SafeLayout } from '@core/layouts';
import { Button, Container, IconButton, InputText, Text } from '@core/ui';
import Session from '@core/utils/Session';

import AUTH_ROUTES from '@e/auth/constants/routes';
import loginSchema from '@e/auth/schemas/login.schema';
import HOME_ROUTES from '@e/home/constants/routes';

type TForm = yup.InferType<typeof loginSchema>;

const SignInScreen = () => {
  const [userLogin, { loading: loadingLogin }] = useAuthSignInMutation();
  const theme = useTheme();
  const navigator = useNavigate();
  const { t } = useTranslation();

  const { control, handleSubmit, formState } = useForm<TForm>({
    resolver: yupResolver(loginSchema),
    defaultValues: { userName: '', password: '' },
    mode: 'onBlur',
  });

  const onSubmit = (values: TForm) => {
    const user = { email: values.userName, password: values.password };

    userLogin({
      variables: { user },
      async onCompleted({ authSignIn }) {
        const { refreshToken, token } = authSignIn;
        await Session.create({ token, refreshToken });
        navigator.replace(HOME_ROUTES.base);
      },
      onError(error) {
        console.log({ error });
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
            <Container mt={8} mb={5} display="flex" alignItems="center">
              <Container
                mb={3}
                alignItems="center"
                borderRadius={10}
                ph={3}
                width={100}
                height={100}
                spacing={-2}
                backgroundColor={theme.palette.colors.black}>
                <Text
                  fontSize={60}
                  fontWeight="Bold"
                  align="center"
                  color="white">
                  D
                </Text>
                <Text
                  fontSize={20}
                  fontWeight="Medium"
                  align="center"
                  color="white">
                  dealz
                </Text>
              </Container>
              <Text fontSize={24} fontWeight="SemiBold" align="center">
                {t('auth.signin.text.gretting')}
              </Text>
              <Text fontSize={16} fontWeight="Regular" align="center">
                {t('auth.signin.text.signin')}
              </Text>
            </Container>
            <Container spacing={2} p={2} direction="column">
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
            <Container spacing={2} p={2} flexDirection="row">
              <Button
                loading={loadingLogin}
                disable={!formState.isValid}
                onPress={handleSubmit(onSubmit)}
                title={t('auth.signin.text.action')}
              />
              <Container spacing={4} direction="row" justifyContent="center">
                <IconButton color="#0165E1">
                  <FacebookIcon />
                </IconButton>
                <IconButton color={theme.palette.grey[100]}>
                  <GoogleIcon />
                </IconButton>
              </Container>
              <Text
                fontSize={12}
                fontWeight="Regular"
                align="center"
                color={theme.palette.grey[500]}>
                {t('auth.signin.text.new_user')}{' '}
                <Text
                  onPress={goSignUp}
                  fontSize={12}
                  fontWeight="SemiBold"
                  color={theme.palette.common.black}>
                  {t('auth.signin.text.create_account')}
                </Text>
              </Text>
            </Container>
          </SafeAreaView>
        </KeyboardAvoidLayout>
      </SafeLayout>
    </ContentLayout>
  );
};

export default SignInScreen;
