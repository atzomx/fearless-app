import { BadgeBase } from '../types';

const Badge: BadgeBase = {
  circle: {
    borderRadius: 999999,
    paddingLeft: 5,
    paddingRight: 5,
    position: 'absolute',
  },
  value: {
    fontSize: 10,
    fontFamily: 'Inter-Regular',
    fontWeight: 900,
    color: '#fff',
  },
};

export default Badge;
