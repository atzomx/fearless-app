import * as React from 'react';

import Svg, { SvgProps, Path } from 'react-native-svg';

const ChevronIcon = ({ width = 24, height = 24, ...props }: SvgProps) => (
  <Svg
    fill="none"
    stroke="currentColor"
    strokeWidth={1}
    viewBox="0 0 24 24"
    {...{ width, height }}
    {...props}>
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m8.25 4.5 7.5 7.5-7.5 7.5"
    />
  </Svg>
);
export default ChevronIcon;
