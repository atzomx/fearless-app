import * as React from 'react';

import Svg, { SvgProps, Path } from 'react-native-svg';

const MapPinIcon = ({ width = 24, height = 24, ...props }: SvgProps) => (
  <Svg
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    viewBox="0 0 24 24"
    {...{ height, width }}
    {...props}>
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    />
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
    />
  </Svg>
);

export default MapPinIcon;
