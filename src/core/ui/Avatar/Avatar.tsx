import React, { FC } from 'react';
import { ImageProps } from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';

import * as S from './Avatar.style';

type AvatarProps = ImageProps & {
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  onPress?: () => void;
};

const Avatar: FC<AvatarProps> = ({ size = 'medium', onPress, ...props }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <S.Image {...props} size={size} />
    </TouchableOpacity>
  );
};

export default Avatar;
