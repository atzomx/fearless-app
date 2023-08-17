import type { ButtonBase } from '../types';

const Button: ButtonBase = {
  contained: {
    height: 52,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
  },
  outlined: {
    height: 52,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: 1,
    paddingLeft: 16,
    paddingRight: 16,
  },
};

export default Button;
