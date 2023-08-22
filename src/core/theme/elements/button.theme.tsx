import type { ButtonBase } from '../types';

const BASE = {
  height: 56,
  borderRadius: 20,
  justifyContent: 'center',
  alignItems: 'center',
  paddingLeft: 16,
  paddingRight: 16,
};

const Button: ButtonBase = {
  contained: {
    ...BASE,
  },
  outlined: {
    ...BASE,
    borderStyle: 'solid',
    borderWidth: 1,
  },
};

export default Button;
