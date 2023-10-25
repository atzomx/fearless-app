import * as React from 'react';

import Svg, { SvgProps, Path } from 'react-native-svg';

const SearchIcon = ({ width = 24, height = 24, ...props }: SvgProps) => (
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
      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z"
    />
  </Svg>
);
export default SearchIcon;
