import * as React from 'react';

import Svg, { SvgProps, Path } from 'react-native-svg';

const FileIcon = ({ width = 24, height = 24, ...props }: SvgProps) => (
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
      d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13"
    />
  </Svg>
);
export default FileIcon;
