import styled from 'styled-components/native';

import Text from '@core/ui/Text';

export const Tab = styled(Text)<{ active?: boolean }>(({ theme, active }) => ({
  fontSize: 12,
  ...(active
    ? {
        fontFamily: theme.font.SemiBold,
        color: theme.pallete.common.white,
      }
    : {
        fontFamily: theme.font.Regular,
        color: theme.pallete.grey[400],
      }),
}));
