import * as React from 'react';

import Svg, { SvgProps, Path } from 'react-native-svg';

const QRCodeIcon = ({ width = 24, height = 24, ...props }: SvgProps) => (
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
      d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5Zm0 9.75c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5Zm9.75-9.75c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z"
    />
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.75 6.75h.75v.75h-.75v-.75Zm0 9.75h.75v.75h-.75v-.75Zm9.75-9.75h.75v.75h-.75v-.75Zm-3 6.75h.75v.75h-.75v-.75Zm0 6h.75v.75h-.75v-.75Zm6-6h.75v.75h-.75v-.75Zm0 6h.75v.75h-.75v-.75Zm-3-3h.75v.75h-.75v-.75Z"
    />
  </Svg>
);
export default QRCodeIcon;
