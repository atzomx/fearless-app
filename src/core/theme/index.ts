import { ThemedStyledProps } from 'styled-components';

import {
  Avatar,
  Badge,
  Button,
  IconButton,
  InputText,
  pallete,
  Text,
} from './elements';
import type {
  AvatarBase,
  BadgeBase,
  ButtonBase,
  InputTextBase,
  PalletBase,
  TextBase,
} from './types';
import { fade, spacing, font, spacingSingle } from './utils';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export type Theme = {
  pallete: PalletBase;
  components: {
    InputText: InputTextBase;
    Text: TextBase;
    Button: ButtonBase;
    Avatar: AvatarBase;
    Badge: BadgeBase;
    IconButton: ButtonBase;
  };
  spacing: typeof spacing;
  spacingSingle: typeof spacingSingle;
  fade: typeof fade;
  font: typeof font;
};

export type ThemedStyled = ThemedStyledProps<
  { children?: React.ReactNode },
  Theme
>;

export const theme: Theme = {
  pallete,
  components: {
    InputText,
    Button,
    Text,
    Avatar,
    Badge,
    IconButton,
  },
  font,
  spacing,
  spacingSingle,
  fade,
};

export * from './types';

export default theme;
