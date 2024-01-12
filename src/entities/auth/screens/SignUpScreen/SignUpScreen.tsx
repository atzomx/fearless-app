import React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native-safe-area-context';

import { HeaderBar, InputControl } from '@core/components';
// import { useUserSingUp } from '@core/graphql/mutations';
import { useUserSingUp } from '@core/graphql/mutations';
import { useNavigate } from '@core/hooks';
import { ContentLayout, KeyboardAvoidLayout, SafeLayout } from '@core/layouts';
import theme from '@core/theme';
import { Button, Container, InputText, Text } from '@core/ui';
import { pick } from '@core/utils/Object';
import signUpSchema, { TFormSignUp } from '@e/auth/schemas/signUp.schema';

const SignUpScreen = () => {
  const [userSingUp] = useUserSingUp();
  const navigator = useNavigate();
  const { t } = useTranslation();

  const onSubmit = async (values: TFormSignUp) => {
    const data = pick(values, ['name', 'email', 'password']);
    const result = await userSingUp({
      variables: { data },
    });
    console.log(result);
    // navigator.replace(INTERACTION_ROUTES.interaction);
  };

  const { control, handleSubmit } = useForm<TFormSignUp>({
    resolver: yupResolver(signUpSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      passwordConfirmation: '',
    },
    mode: 'onBlur',
  });

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
                color={theme.pallete.colors.black}>
                {t('auth.signup.text.gretting')}
              </Text>
              <Text
                fontSize={16}
                fontWeight="Regular"
                color={theme.pallete.grey[500]}>
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
                name="passwordConfirmation"
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
              onPress={handleSubmit(onSubmit)}
              title={t('auth.signup.text.action')}
            />
            <Text
              fontSize={12}
              fontWeight="Regular"
              align="center"
              color={theme.pallete.grey[500]}>
              {t('auth.signup.text.new_user')}{' '}
              <Text
                onPress={goSignIn}
                fontSize={12}
                fontWeight="SemiBold"
                color={theme.pallete.common.black}>
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
