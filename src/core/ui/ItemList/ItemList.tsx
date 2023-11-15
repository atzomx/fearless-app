import React, { FC, PropsWithChildren } from 'react';
import { View } from 'react-native';

import * as S from './ItemList.style';

import Container from '../Container';

type IconProps = PropsWithChildren & { color: string };
const Icon: FC<IconProps> = ({ children, color }) => {
  return <S.IconContainer color={color}>{children}</S.IconContainer>;
};

const Text: FC<PropsWithChildren> = ({ children }) => {
  return <View>{children}</View>;
};

const ItemList: FC<PropsWithChildren> & {
  Icon: FC<IconProps>;
  Text: FC<PropsWithChildren>;
} = ({ children }) => {
  return <Container direction="row">{children}</Container>;
};

ItemList.Icon = Icon;
ItemList.Text = Text;

export default ItemList;
