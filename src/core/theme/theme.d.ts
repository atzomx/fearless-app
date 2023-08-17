import type {
  AvatarBase,
  ButtonBase,
  InputTextBase,
  PalletBase,
  TextBase,
  BadgeBase,
} from './types';
import { fade, spacing } from './utils/style';
export * from './types';

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
  fade: typeof fade;
};
