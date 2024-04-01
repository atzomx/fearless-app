import { Container, Text } from '@core/ui';
import React from 'react';
import { Pressable, TouchableOpacity } from 'react-native';
import { useTheme } from 'styled-components/native';

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
        color={theme.pallete.colors.black}>
        {title}
      </Text>
      <TouchableOpacity activeOpacity={0.8}>
        <Text fontWeight="Light" color={theme.pallete.grey[700]}>
          {more}
        </Text>
      </TouchableOpacity>
    </Container>
  );
};

export default MoreTitle;
