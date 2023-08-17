import React, { FC } from 'react';
import { View } from 'react-native';

import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components/native';

import { NotificationIcon } from '@core/icons';
import { Avatar, Badge, Text } from '@core/ui';

import * as S from './HeaderBar.style';

const HeaderBar: FC = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <View>
      <S.ContainerAvatar>
        <Avatar
          source={{
            uri: 'https://avatars.githubusercontent.com/u/43711671?v=4',
          }}
        />
      </S.ContainerAvatar>
      <S.ContainerGreetings>
        <Text variant="subtitle2" color="secondary.dark" align="left">
          {t('common.headerBar.primaryGreeting')} Erick
        </Text>
        <Text variant="button" color="secondary.dark" align="left">
          {t('common.headerBar.secondaryGreeting')}
        </Text>
      </S.ContainerGreetings>
      <S.ContainerIcon>
        <Badge value={10} color="secondary" max={9}>
          <NotificationIcon
            height={30}
            width={30}
            fill={theme.pallete.primary.main}
          />
        </Badge>
      </S.ContainerIcon>
    </View>
  );
};

export default HeaderBar;
