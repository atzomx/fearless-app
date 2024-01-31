import React, { FC } from 'react';

import { useTheme } from 'styled-components/native';

import { Container, Text } from '@core/ui';

type ProfileRankingTextProps = {
  title: string;
  subtitle: string;
};

const ProfileRankingText: FC<ProfileRankingTextProps> = ({
  title,
  subtitle,
}) => {
  const theme = useTheme();
  return (
    <Container alignItems="center" spacing={0}>
      <Text fontWeight="Bold" fontSize={24} color={theme.pallete.common.black}>
        {title}
      </Text>
      <Text fontSize={12} color={theme.pallete.grey[500]}>
        {subtitle}
      </Text>
    </Container>
  );
};

export default ProfileRankingText;
