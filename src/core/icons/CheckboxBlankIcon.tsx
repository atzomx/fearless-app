import * as React from 'react';

import Svg, { SvgProps, Path } from 'react-native-svg';

const CheckboxBlankIcon = ({ width = 24, height = 24, ...props }: SvgProps) => (
  <Svg
    fill="currentColor"
    viewBox="0 0 24 24"
    {...{ width, height }}
    {...props}>
    <Path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
  </Svg>
);

export default CheckboxBlankIcon;
