import type { ButtonBase } from '../types';

const BASE = {
  height: 64,
  borderRadius: 20,
  justifyContent: 'center',
  alignItems: 'center',
  paddingLeft: 16,
  paddingRight: 16,
};

const Button: ButtonBase = {
  contained: {
    ...BASE,
    flexDirection: 'row',
    gap: 10,
  },
  outlined: {
    ...BASE,
    borderStyle: 'solid',
    borderWidth: 1,
    flexDirection: 'row',
    gap: 10,
  },
};

export default Button;
