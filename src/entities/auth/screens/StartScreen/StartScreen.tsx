import React from 'react';

import { useTranslation } from 'react-i18next';

import { useNavigate } from '@core/hooks';
import { Spacer } from '@core/ui';
import ROUTES from '@e/auth/constants/routes';
import { LogoLayout } from '@e/auth/layouts';

import * as S from './StartScreen.styled';

const StartScreen = () => {
  const { t } = useTranslation();
  const navigator = useNavigate();

  const onPressButton = () => {
    navigator.replace(ROUTES.login);
  };

  return (
    <LogoLayout>
      <S.Title color="primary" variant="h4">
        {t('auth.start.text.title')}
      </S.Title>
      <Spacer spacing={2} />
      <S.SubTitle color="secondary" variant="body1">
        {t('auth.start.text.subtitle1')}{' '}
        <S.Caption variant="body1">{t('auth.start.text.caption')}</S.Caption>{' '}
        {t('auth.start.text.subtitle2')}
      </S.SubTitle>
      <Spacer spacing={2} />
      <S.Button onPress={onPressButton} color="primary" title="Comencemos" />
      <Spacer spacing={2} />
    </LogoLayout>
  );
};

export default StartScreen;
