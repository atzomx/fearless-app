import * as React from 'react';

import Svg, { SvgProps, Path } from 'react-native-svg';

const ArrowTrendingDownIcon = ({
  width = 24,
  height = 24,
  ...props
}: SvgProps) => (
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
      d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181"
    />
  </Svg>
);
export default ArrowTrendingDownIcon;
