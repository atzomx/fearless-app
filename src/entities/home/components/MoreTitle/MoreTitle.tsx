import { Container, Text } from '@core/ui';
import React from 'react';
import { Pressable, TouchableOpacity } from 'react-native';
import { useTheme } from 'styled-components/native';

type Props = {};

const MoreTitle = (props: Props) => {
  const theme = useTheme();
  return (
    <Container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      mv={2}>
      <Text
        fontWeight="Medium"
        fontSize={18}
        color={theme.pallete.colors.black}>
        My Deals
      </Text>
      <TouchableOpacity activeOpacity={0.8}>
        <Text fontWeight="Light" color={theme.pallete.grey[700]}>
          See more
        </Text>
      </TouchableOpacity>
    </Container>
  );
};

export default MoreTitle;
