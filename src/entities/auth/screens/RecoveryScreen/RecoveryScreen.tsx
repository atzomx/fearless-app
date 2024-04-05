import React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from 'styled-components/native';
import yup from 'yup';

import { HeaderBar, InputControl } from '@core/components';
import { useNavigate } from '@core/hooks';
import { ContentLayout, KeyboardAvoidLayout, SafeLayout } from '@core/layouts';
import { Button, Container, InputText, Text } from '@core/ui';

import loginSchema from '@e/auth/schemas/login.schema';

type TForm = yup.InferType<typeof loginSchema>;

const RecoveryScreen = () => {
  const navigator = useNavigate();
  const { t } = useTranslation();
  const theme = useTheme();

  const onSubmit = () => {
    // navigator.replace(INTERACTION_ROUTES.interaction);
  };

  const { control, handleSubmit } = useForm<TForm>({
    resolver: yupResolver(loginSchema),
    defaultValues: { userName: '', password: '' },
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
            <Container p={2} mv={2} spacing={0}>
              <Text
                fontSize={24}
                fontWeight="SemiBold"
                color={theme.pallete.colors.black}>
                {t('auth.recovery.text.gretting')}
              </Text>
              <Text
                fontSize={16}
                fontWeight="Regular"
                color={theme.pallete.grey[500]}>
                {t('auth.recovery.text.recovery')}
              </Text>
            </Container>
            <Container fullHeight spacing={2} p={2} direction="column">
              <InputControl
                component={InputText}
                control={control}
                name="userName"
                label={t('auth.recovery.input.username')}
                color="secondary"
                required
              />
            </Container>
          </SafeAreaView>
        </KeyboardAvoidLayout>
        <SafeAreaView edges={['bottom']}>
          <Container fullWidth p={2} flexDirection="row">
            <Button
              onPress={handleSubmit(onSubmit)}
              title={t('auth.recovery.text.action')}
            />
          </Container>
        </SafeAreaView>
      </SafeLayout>
    </ContentLayout>
  );
};

export default RecoveryScreen;
