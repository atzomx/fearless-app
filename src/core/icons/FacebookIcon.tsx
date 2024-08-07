import * as React from 'react';

import Svg, { SvgProps, Path } from 'react-native-svg';

const FacebookIcon = ({ width = 24, height = 24, ...props }: SvgProps) => (
  <Svg viewBox="0 0 20 20" {...{ width, height }} {...props}>
    <Path
      fill="#FFF"
      d="M8.46 18h2.93v-7.3h2.45l.37-2.84h-2.82V6.04c0-.82.23-1.38 1.41-1.38h1.51V2.11c-.26-.03-1.15-.11-2.19-.11-2.18 0-3.66 1.33-3.66 3.76v2.1H6v2.84h2.46V18z"
    />
  </Svg>
);

export default FacebookIcon;
