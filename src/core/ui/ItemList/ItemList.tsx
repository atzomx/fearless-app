import React, { FC, PropsWithChildren } from 'react';
import { View } from 'react-native';

import Container from '../Container';

type IconProps = PropsWithChildren & { color: string };
const Icon: FC<IconProps> = ({ children, color }) => {
  return (
    <View
      style={{
        backgroundColor: color,
        borderRadius: 8,
        height: 36,
        width: 36,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {children}
    </View>
  );
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
