import React from 'react';

import { useTranslation } from 'react-i18next';

import { useSession } from '@core/hooks';
import { LogOutIcon, MapPinIcon, StoreIcon } from '@core/icons';
import { List } from '@core/ui';

const ITEMS = [
  {
    key: 'address',
    icon: MapPinIcon,
    text: 'profile.edit.address.text',
    description: 'profile.edit.address.description',
  },
  {
    key: 'products',
    icon: StoreIcon,
    text: 'profile.edit.products.text',
    description: 'profile.edit.products.description',
  },
  {
    key: 'logout',
    icon: LogOutIcon,
    text: 'profile.edit.logout.text',
  },
];

const ProfileList = () => {
  const { t } = useTranslation();
  const { logOut } = useSession();

  const onPressItem = (key: string) => async () => {
    if (key === 'logout') logOut();
  };

  return (
    <List>
      {ITEMS.map(item => (
        <List.Item
          onPress={onPressItem(item.key)}
          key={item.key}
          icon={item.icon}>
          <List.Text>{t(item.text)}</List.Text>
          {item.description && (
            <List.Description>{t(item.description)}</List.Description>
          )}
        </List.Item>
      ))}
    </List>
  );
};

export default ProfileList;
