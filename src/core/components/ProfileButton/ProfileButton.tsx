import React from 'react';

import { useModal } from '@core/hooks';
import { Avatar } from '@core/ui';

const URL = 'https://avatars.githubusercontent.com/u/43711671?v=4';

const ProfileButton = () => {
  const modal = useModal();
  return <Avatar onPress={modal.open} source={{ uri: URL }} size="large" />;
};

export default ProfileButton;
