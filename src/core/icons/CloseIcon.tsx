import * as React from 'react';

import Svg, { SvgProps, Path } from 'react-native-svg';

const CloseIcon = ({ width = 24, height = 24, ...props }: SvgProps) => (
  <Svg
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    viewBox="0 0 24 24"
    {...{ width, height }}
    {...props}>
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18 18 6M6 6l12 12"
    />
  </Svg>
);

export default CloseIcon;
