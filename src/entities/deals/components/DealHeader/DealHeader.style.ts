import styled from 'styled-components/native';

import { Text } from '@core/ui';

export const TextSecondary = styled(Text)(({ theme }) => ({
  marginTop: theme.spacing(-1),
}));
