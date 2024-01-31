import React from 'react';
import { StyleSheet } from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { HeaderBar } from '@core/components';
import { SafeLayout, ScrollLayout } from '@core/layouts';
import { Avatar, Button, Container, Text } from '@core/ui';
import {
  ProfileEditForm,
  ProfileList,
  ProfileRankingText,
} from '@e/profile/components';

const URL = 'https://avatars.githubusercontent.com/u/43711671?v=4';

const MoreScreen = () => {
  return (
    <SafeLayout>
      <HeaderBar onBack={console.log} title="Mi Perfil" />
      <ScrollLayout>
        <KeyboardAwareScrollView
          enableOnAndroid
          enableAutomaticScroll
          extraScrollHeight={130}>
          <Container p={2} spacing={2} alignItems="center">
            <Avatar source={{ uri: URL }} size="xlarge" />
            <Text fontWeight="SemiBold" fontSize={20}>
              Erick Andrade
            </Text>
            <Container direction="row" spacing={4}>
              <ProfileRankingText title="100" subtitle="Ventas" />
              <ProfileRankingText title="4/5" subtitle="Calificacion" />
              <ProfileRankingText title="100" subtitle="Compras" />
            </Container>
            <Button sx={{ button: styles.button }} title="Editar" />
          </Container>
          {/* <ProfileList /> */}
          <ProfileEditForm />
        </KeyboardAwareScrollView>
      </ScrollLayout>
    </SafeLayout>
  );
};

const styles = StyleSheet.create({
  button: {
    minWidth: 130,
    height: 48,
  },
});

export default MoreScreen;
