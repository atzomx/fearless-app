import React from 'react';
import { View } from 'react-native';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { InputControl } from '@core/components';
// import { useNavigate } from '@core/hooks';
import { Button, Spacer, Stack, Text } from '@core/ui';
import loginSchema from '@e/auth/schemas/login.schema';
// import INTERACTION_ROUTES from '@e/interaction/constants/routes';

type TFormLogin = { userName: string; password: string };

const RecoveryScreen = () => {
  // const navigator = useNavigate();
  const { t } = useTranslation();

  const onSubmit = () => {
    // navigator.replace(INTERACTION_ROUTES.interaction);
  };

  const { control } = useForm<TFormLogin>({
    resolver: yupResolver(loginSchema),
    defaultValues: { userName: '', password: '' },
    mode: 'onBlur',
  });

  return (
    <View>
      <Stack spacing={2} fullWidth>
        <Text variant="h4" color="secondary.dark" align="center">
          {t('auth.recovery.text.recovery')}
        </Text>
        <InputControl
          control={control}
          name="userName"
          label={t('auth.recovery.input.username')}
          color="secondary"
          required
        />
        <Spacer spacing={1} />
        <Button onPress={onSubmit} title={t('auth.recovery.text.recovery')} />
      </Stack>
    </View>
  );
};

export default RecoveryScreen;
