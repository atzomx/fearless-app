import type { ButtonBase } from '../types';

const IconButton: ButtonBase = {
  contained: {
    height: 52,
    width: 52,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  outlined: {
    height: 52,
    width: 52,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: 3,
  },
};

export default IconButton;
