import React from 'react';

import { useModal } from '@core/hooks';
import { Avatar, Badge } from '@core/ui';

const URL = 'https://avatars.githubusercontent.com/u/43711671?v=4';

const ProfileButton = () => {
  const modal = useModal();
  return (
    <Badge value={0} color="secondary" max={9}>
      <Avatar onPress={modal.open} source={{ uri: URL }} size="small" />
    </Badge>
  );
};

export default ProfileButton;
