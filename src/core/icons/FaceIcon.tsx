import * as React from 'react';

import Svg, { SvgProps, Path } from 'react-native-svg';

const FaceIcon = (props: SvgProps) => (
  <Svg viewBox="0 0 512 512" {...props}>
    <Path d="m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z" />
  </Svg>
);

export default FaceIcon;
