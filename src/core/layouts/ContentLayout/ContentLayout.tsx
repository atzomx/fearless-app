import React, { FC, PropsWithChildren } from 'react';
import { Dimensions, View } from 'react-native';

const dimensions = Dimensions.get('window');

const ContentLayout: FC<PropsWithChildren> = ({ children }) => {
  return <View style={[{ minHeight: dimensions.height }]}>{children}</View>;
};

export default ContentLayout;
