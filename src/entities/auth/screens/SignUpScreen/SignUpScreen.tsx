/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { InputControl } from '@core/components';
import { useUserSingUp } from '@core/graphql/mutations';
import { useNavigate } from '@core/hooks';
import { Button, Spacer, Stack, Text } from '@core/ui';
import { LogoLayout } from '@e/auth/layouts';
import { TFormSignUp } from '@e/auth/schemas/signUp.schema';
import signUpSchema from '@e/auth/schemas/signUp.schema';
// import INTERACTION_ROUTES from '@e/interaction/constants/routes';

const SignUpScreen = () => {
  const [userSingUp] = useUserSingUp();
  const navigator = useNavigate();
  const { t } = useTranslation();

  const onSubmit = async (values: TFormSignUp) => {
    // TODO: uncomment this section after create login
    const { passwordConfirmation, ...dataValues } = values;
    const result = await userSingUp({
      variables: { data: { ...dataValues } },
    });
    console.log(result);
    // navigator.replace(INTERACTION_ROUTES.interaction);
  };

  const { control, handleSubmit, formState } = useForm<TFormSignUp>({
    resolver: yupResolver(signUpSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      passwordConfirmation: '',
    },
    mode: 'onBlur',
  });

  return (
    <LogoLayout>
      <Stack spacing={2} fullWidth>
        <Text variant="h4" color="secondary.dark" align="center">
          {t('auth.signup.text.signup')}
        </Text>
        <InputControl
          control={control}
          name="name"
          label={t('auth.signup.input.username')}
          color="secondary"
          required
        />
        <InputControl
          control={control}
          name="email"
          label={t('auth.signup.input.email')}
          color="secondary"
          required
        />
        <InputControl
          control={control}
          name="password"
          label={t('auth.signup.input.password')}
          secureTextEntry
          color="secondary"
          required
        />
        <InputControl
          control={control}
          name="passwordConfirmation"
          label={t('auth.signup.input.password-confirm')}
          secureTextEntry
          color="secondary"
          required
        />
        <Spacer spacing={1} />
        <Button
          onPress={handleSubmit(onSubmit)}
          title={t('auth.signup.text.signup')}
        />
      </Stack>
    </LogoLayout>
  );
};

export default SignUpScreen;
