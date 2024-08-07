import React from 'react';
import { TouchableOpacity } from 'react-native';

import { useTheme } from 'styled-components/native';

import { Container, Text } from '@core/ui';

type MoreTitleProps = {
  title: React.ReactNode;
  more: React.ReactNode;
};

const MoreTitle = ({ more, title }: MoreTitleProps) => {
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
        color={theme.palette.colors.black}>
        {title}
      </Text>
      <TouchableOpacity activeOpacity={0.8}>
        <Text fontWeight="Light" color={theme.palette.grey[700]}>
          {more}
        </Text>
      </TouchableOpacity>
    </Container>
  );
};

export default MoreTitle;
