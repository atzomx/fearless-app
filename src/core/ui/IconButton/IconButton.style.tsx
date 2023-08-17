import styled from 'styled-components/native';

import {
  ButtonMakerProps,
  getButtonVariantStyle,
} from '../ButtonBase/ButtonBase.utils';

export const Button = styled.Pressable<ButtonMakerProps>(
  ({ theme, color, variant, disable }) => ({
    ...getButtonVariantStyle({ variant, theme, color, disable }),
    ...theme.components.IconButton[variant],
  }),
);
