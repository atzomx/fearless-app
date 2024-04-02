import styled from 'styled-components/native';

import { VariantSize } from '@core/theme';

export const Image = styled.Image<{
  size: VariantSize;
}>(({ size, theme }) => ({
  ...theme.components.Avatar[size],
  width: Number(theme.components.Avatar[size].width) - 4,
  height: Number(theme.components.Avatar[size].height) - 4,
}));

export const Container = styled.TouchableOpacity<{ size: VariantSize }>(
  ({ theme, size }) => ({
    borderStyle: 'solid',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: theme.pallete.grey[500],
    padding: 2,
    width: Number(theme.components.Avatar[size].width),
    height: Number(theme.components.Avatar[size].height),
    justifyContent: 'center',
    alignItems: 'center',
  }),
);
