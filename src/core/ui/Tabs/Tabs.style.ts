import styled from 'styled-components/native';

import BaseScrollLayout from '@core/layouts/ScrollLayout';

export const TabsContainer = styled.View({
  flex: 1,
  flexDirection: 'row',
  backgroundColor: 'transparent',
});

export const TabContent = styled.TouchableOpacity<{ active: boolean }>(
  ({ theme, active }) => ({
    justifyContent: 'center',
    alignItems: 'center',
    height: theme.spacing(3.75),
    borderRadius: theme.spacing(1),
    padding: theme.spacing(0.7, 1.5),
    ...(active && {
      backgroundColor: theme.palette.common.black,
    }),
  }),
);

export const ScrollLayout = styled(BaseScrollLayout)({
  height: 30,
});
