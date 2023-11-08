import * as React from 'react';

import Svg, { SvgProps, Path } from 'react-native-svg';

const SignOutIcon = ({ width = 24, height = 24, ...props }: SvgProps) => (
  <Svg
    fill="none"
    stroke="currentColor"
    strokeWidth={1}
    viewBox="0 0 24 24"
    {...{ height, width }}
    {...props}>
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
    />
  </Svg>
);

export default SignOutIcon;
