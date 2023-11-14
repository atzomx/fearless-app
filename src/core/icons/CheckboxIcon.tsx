import * as React from 'react';

import Svg, { SvgProps, Path } from 'react-native-svg';

const CheckboxIcon = ({ width = 24, height = 24, ...props }: SvgProps) => (
  <Svg
    fill="currentColor"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    {...{ width, height }}
    {...props}>
    <Path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-9 14-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
  </Svg>
);

export default CheckboxIcon;
