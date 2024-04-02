import React, { FC } from 'react';
import { ImageProps } from 'react-native';

import * as S from './Avatar.style';

type AvatarProps = ImageProps & {
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  onPress?: () => void;
  height?: number;
  width?: number;
};

const Avatar: FC<AvatarProps> = ({ size = 'medium', onPress, ...props }) => {
  return (
    <S.Container size={size} activeOpacity={0.8} onPress={onPress}>
      <S.Image {...props} size={size} />
    </S.Container>
  );
};

export default Avatar;
