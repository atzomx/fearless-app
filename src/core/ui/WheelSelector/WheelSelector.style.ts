import styled from 'styled-components/native';

import { SELECT_OPTION_HEIGHT } from './SelectItem';

export const Selector = styled.View(({ theme }) => ({
  height: SELECT_OPTION_HEIGHT,
  marginTop: SELECT_OPTION_HEIGHT,
  position: 'absolute',
  top: 0,
  width: '100%',
  gap: SELECT_OPTION_HEIGHT,
  backgroundColor: theme.fade(theme.palette.grey[100]),
  borderRadius: theme.spacingSingle(1),
}));
