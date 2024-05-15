import React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native-safe-area-context';
import yup from 'yup';

import { HeaderBar, InputControl } from '@core/components';
import { useAuthSignUpMutation } from '@core/graphql';
import { useNavigate } from '@core/hooks';
import { ContentLayout, KeyboardAvoidLayout, SafeLayout } from '@core/layouts';
import theme from '@core/theme';
import { Button, Container, InputText, Text } from '@core/ui';
import { omit } from '@core/utils/Object';
import Session from '@core/utils/Session';

import signUpSchema from '@e/auth/schemas/signUp.schema';
import HOME_ROUTES from '@e/home/constants/routes';

type TForm = yup.InferType<typeof signUpSchema>;

const SignUpScreen = () => {
  const [userSingUp, { loading: loadingSignUp }] = useAuthSignUpMutation();
  const navigator = useNavigate();
  const { t } = useTranslation();

  const { control, handleSubmit } = useForm<TForm>({
    resolver: yupResolver(signUpSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmation: '',
    },
    mode: 'onBlur',
  });

  const onSubmit = (values: TForm) => {
    const createUserInput = omit(values, ['confirmation']);
    userSingUp({
      variables: { createUserInput },
      async onCompleted({ authSignUp }) {
        const { refreshToken, token } = authSignUp;
        await Session.create({ token, refreshToken });
        navigator.navigate(HOME_ROUTES.base);
      },
    });
  };

  const goSignIn = async () => {
    navigator.goBack();
  };

  return (
    <ContentLayout>
      <SafeLayout>
        <KeyboardAvoidLayout>
          <SafeAreaView>
            <HeaderBar onBack={goSignIn} />
            <Container p={2} mv={2}>
              <Text
                fontSize={24}
                fontWeight="SemiBold"
                color={theme.palette.colors.black}>
                {t('auth.signup.text.gretting')}
              </Text>
              <Text
                fontSize={16}
                fontWeight="Regular"
                color={theme.palette.grey[500]}>
                {t('auth.signup.text.description')}
              </Text>
            </Container>
            <Container
              flexBasis="auto"
              flexGrow={4}
              flexShrink={4}
              spacing={2}
              p={2}
              direction="column">
              <InputControl
                control={control}
                component={InputText}
                name="name"
                label={t('auth.signup.input.name')}
                color="secondary"
                required
              />
              <InputControl
                control={control}
                component={InputText}
                name="email"
                label={t('auth.signup.input.email')}
                color="secondary"
                required
              />
              <InputControl
                control={control}
                component={InputText}
                name="password"
                label={t('auth.signup.input.password')}
                secureTextEntry
                color="secondary"
                required
              />
              <InputControl
                control={control}
                component={InputText}
                name="confirmation"
                label={t('auth.signup.input.password-confirm')}
                secureTextEntry
                color="secondary"
                required
              />
            </Container>
          </SafeAreaView>
        </KeyboardAvoidLayout>
        <SafeAreaView edges={['bottom']}>
          <Container spacing={2} fullWidth p={2} flexDirection="row">
            <Button
              loading={loadingSignUp}
              onPress={handleSubmit(onSubmit)}
              title={t('auth.signup.text.action')}
            />
            <Text
              fontSize={12}
              fontWeight="Regular"
              align="center"
              color={theme.palette.grey[500]}>
              {t('auth.signup.text.new_user')}{' '}
              <Text
                onPress={goSignIn}
                fontSize={12}
                fontWeight="SemiBold"
                color={theme.palette.common.black}>
                {t('auth.signup.text.create_account')}
              </Text>
            </Text>
          </Container>
        </SafeAreaView>
      </SafeLayout>
    </ContentLayout>
  );
};

export default SignUpScreen;
