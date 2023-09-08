import React, { FC } from 'react';

import * as S from './Tab.style';

type TabProps = React.PropsWithChildren & {
  active?: boolean;
};

const Tab: FC<TabProps> = ({ children, active = false }) => {
  return <S.Tab active={active}>{children}</S.Tab>;
};

Tab.displayName = 'Tab';

export default Tab;
