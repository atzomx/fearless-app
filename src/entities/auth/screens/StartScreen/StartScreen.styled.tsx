import { View } from 'react-native';

import styled from 'styled-components/native';

export const Container = styled(View)(({ theme }) => ({
  justifyContent: 'center',
  flex: 1,
  // backgroundColor: theme.pallete.primary.main,
}));
