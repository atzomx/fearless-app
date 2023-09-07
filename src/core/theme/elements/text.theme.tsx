import type { TextBase } from '../types';
import { font } from '../utils';

const Text: TextBase = {
  h1: {
    // letterSpacing: 1.504,
    fontSize: 42,
    fontFamily: font[100],
  },
  h2: {
    fontSize: 36,
    // letterSpacing: 0.496,
    fontFamily: font[600],
  },
  h3: {
    fontSize: 32,
    // letterSpacing: 0.496,
    fontFamily: font[500],
  },
  h4: {
    fontSize: 24,
    // letterSpacing: 0,
    fontFamily: font[600],
  },
  h5: {
    fontSize: 22,
    // letterSpacing: 0.256,
    fontFamily: font[400],
  },
  h6: {
    fontSize: 20,
    // letterSpacing: 0.256,
    fontFamily: font[400],
  },
  body1: {
    fontSize: 16,
    // letterSpacing: 0.496,
    fontFamily: font[400],
  },
  body2: {
    fontSize: 14,
    // letterSpacing: 0.256,
    fontFamily: font[400],
  },
  subtitle1: {
    fontSize: 16,
    // letterSpacing: 0.144,
    fontFamily: font[600],
  },
  subtitle2: {
    fontSize: 14,
    // letterSpacing: 0.096,
    fontFamily: font[200],
  },
  button: {
    fontSize: 16,
    // letterSpacing: 0.078,
    textTransform: 'capitalize',
    fontFamily: font[500],
  },
  caption: {
    fontSize: 10,
    fontFamily: font[300],
  },
};

export default Text;
