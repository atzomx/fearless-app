import * as React from 'react';

import Svg, { SvgProps, Path } from 'react-native-svg';

const ChatIcon = (props: SvgProps) => (
  <Svg viewBox="0 0 512 512" {...props}>
    <Path d="M144 464a16 16 0 0 1-16-16v-64h-24a72.08 72.08 0 0 1-72-72V120a72.08 72.08 0 0 1 72-72h304a72.08 72.08 0 0 1 72 72v192a72.08 72.08 0 0 1-72 72H245.74l-91.49 76.29A16.05 16.05 0 0 1 144 464z" />
  </Svg>
);

export default ChatIcon;
