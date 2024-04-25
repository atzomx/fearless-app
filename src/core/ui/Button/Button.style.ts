import styled from 'styled-components/native';

import {
  ButtonMakerProps,
  getButtonVariantStyle,
  getContentVariantStyle,
} from '../ButtonBase/ButtonBase.utils';

export const Button = styled.Pressable<ButtonMakerProps>(
  ({ theme, color, variant, disabled }) => ({
    ...getButtonVariantStyle({ variant, theme, color, disabled }),
    ...theme.components.Button[variant],
  }),
);

export const Text = styled.Text<ButtonMakerProps>(
  ({ theme, color, variant, disabled }) => ({
    ...theme.components.Text.button,
    color: getContentVariantStyle({ variant, theme, color, disabled }),
  }),
);
