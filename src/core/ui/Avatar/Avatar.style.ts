import styled from 'styled-components/native';

import { VariantSize } from '@core/theme';

export const Image = styled.Image<{ size: VariantSize }>(({ size, theme }) => ({
  ...theme.components.Avatar[size],
}));
