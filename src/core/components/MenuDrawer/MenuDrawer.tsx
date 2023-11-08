import React, { FC } from 'react';
import { SectionList, StatusBar, TouchableOpacity } from 'react-native';

import { useTheme } from 'styled-components/native';

import {
  BellIcon,
  BugIcon,
  ChevronIcon,
  ExclamationCircleIcon,
  SignOutIcon,
  VerifyIcon,
} from '@core/icons';
import { Avatar, Container, Drawer, ItemList, Text } from '@core/ui';

import BackButton from '../BackButton';

const URL = 'https://avatars.githubusercontent.com/u/43711671?v=4';

type Section =
  | 'notifications'
  | 'verification'
  | 'claims'
  | 'bug_report'
  | 'sign_out';

const COLORS = {
  notifications: '#ffc700',
  verification: '#3d9f00',
  claims: '#ff8038',
  bug_report: '#e10000',
  sign_out: '#dedede',
};

const ICONS = {
  notifications: BellIcon,
  verification: VerifyIcon,
  claims: ExclamationCircleIcon,
  bug_report: BugIcon,
  sign_out: SignOutIcon,
};

const ELEMENTS = [
  {
    title: 'Preferencias',
    data: ['notifications', 'verification', 'claims'],
  },
  {
    title: 'Otros',
    data: ['bug_report'],
  },
  {
    title: '',
    data: ['sign_out'],
  },
] as { title: string; data: Section[] }[];

export type MenuDrawerProps = {
  open: boolean;
  onClose: () => void;
};

const MenuDrawer: FC<MenuDrawerProps> = ({ open, onClose }) => {
  const theme = useTheme();
  return (
    <Drawer open={open} onClose={onClose}>
      <Container ph={2} style={{ marginTop: StatusBar.currentHeight }}>
        <Container direction="row">
          <BackButton />
        </Container>
        <TouchableOpacity activeOpacity={1} onPress={console.log}>
          <Container direction="row" justifyContent="space-between">
            <Container direction="row">
              <Container>
                <Avatar
                  onPress={console.log}
                  source={{ uri: URL }}
                  size="large"
                />
              </Container>
              <Container flex={2} spacing={-0.5}>
                <Text
                  ellipsizeMode="tail"
                  fontWeight="SemiBold"
                  numberOfLines={1}
                  fontSize={16}>
                  Juan Jose Lopez Urtado Martiez de la Olla
                </Text>
                <Text
                  fontWeight="SemiBold"
                  numberOfLines={1}
                  fontSize={12}
                  color={theme.pallete.grey[500]}>
                  juanmartinex
                </Text>
              </Container>
            </Container>
            <Container fullHeight flex={1} justifyContent="center">
              <ChevronIcon
                width={16}
                height={16}
                color={theme.pallete.grey['800']}
              />
            </Container>
          </Container>
        </TouchableOpacity>
        <Container>
          <SectionList
            sections={ELEMENTS}
            renderItem={({ item }) => {
              const Icon = ICONS[item];
              return (
                <ItemList>
                  <ItemList.Icon color={theme.fade(COLORS[item], 0.5)}>
                    <Icon color={theme.pallete.common.black} />
                  </ItemList.Icon>
                  <ItemList.Text>
                    <Text fontSize={14}>{item}</Text>
                  </ItemList.Text>
                </ItemList>
              );
            }}
            renderSectionHeader={({ section }) => <Text>{section.title}</Text>}
            keyExtractor={item => `basicListEntry-${item}`}
          />
        </Container>
      </Container>
    </Drawer>
  );
};

export default MenuDrawer;
