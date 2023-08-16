import styled from 'styled-components/native';

import {
  ButtonMakerProps,
  getButtonVariantStyle,
  getContentVariantStyle,
} from '../ButtonBase/ButtonBase.utils';

export const Button = styled.Pressable<ButtonMakerProps>(
  ({ theme, color, variant, disable }) => ({
    ...getButtonVariantStyle({ variant, theme, color, disable }),
    ...theme.components.Button[variant],
  }),
);

export const Text = styled.Text<ButtonMakerProps>(
  ({ theme, color, variant, disable }) => ({
    ...theme.components.Text.button,
    color: getContentVariantStyle({ variant, theme, color, disable }),
  }),
);
