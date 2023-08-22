import React from 'react';
import { View } from 'react-native';

import { yupResolver } from '@hookform/resolvers/yup';
// import { useUserLogin } from '@core/graphql/mutations';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { InputControl } from '@core/components';
import { useNavigate } from '@core/hooks';
import { Button, Spacer, Stack, Text } from '@core/ui';
import AUTH_ROUTES from '@e/auth/constants/routes';
import loginSchema from '@e/auth/schemas/login.schema';

type TFormLogin = { userName: string; password: string };

const SignInScreen = () => {
  // const [userLogin] = useUserLogin();
  const navigator = useNavigate();
  const { t } = useTranslation();

  const onSubmit = async (values: TFormLogin) => {
    // TODO: uncomment this section after create login
    // const result = await userLogin({
    //   variables: values,
    // });
    console.log(values);
    // navigator.replace(HOME_ROUTES.home);
  };

  const { control, handleSubmit } = useForm<TFormLogin>({
    resolver: yupResolver(loginSchema),
    defaultValues: { userName: '', password: '' },
    mode: 'onBlur',
  });

  const goSignUp = async () => {
    navigator.push(AUTH_ROUTES.signup);
  };
  const goRecovery = async () => {
    navigator.push(AUTH_ROUTES.recovery);
  };

  return (
    <View>
      <Stack spacing={2} fullWidth>
        <Text variant="h4" color="secondary.dark" align="center">
          {t('auth.signin.text.signin')}
        </Text>
        <InputControl
          control={control}
          name="userName"
          label={t('auth.signin.input.username')}
          color="secondary"
          required
        />
        <InputControl
          control={control}
          name="password"
          label={t('auth.signin.input.password')}
          color="secondary"
          secureTextEntry
          required
        />
        <Text
          align="right"
          variant="caption"
          color="secondary.main"
          onPress={goRecovery}>
          {t('auth.signin.text.recover')}
        </Text>
        <Spacer spacing={1} />
        <Button
          onPress={handleSubmit(onSubmit)}
          title={t('auth.signin.text.signin')}
        />
        <Button
          onPress={goSignUp}
          variant="outlined"
          title={t('auth.signin.text.signup')}
        />
      </Stack>
    </View>
  );
};

export default SignInScreen;
