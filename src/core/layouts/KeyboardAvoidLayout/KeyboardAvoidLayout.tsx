import React, { FC } from 'react';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export type KeyboardAvoidLayoutProps = React.PropsWithChildren;

const KeyboardAvoidLayout: FC<KeyboardAvoidLayoutProps> = ({ children }) => {
  return (
    <KeyboardAwareScrollView
      enableOnAndroid
      enableAutomaticScroll
      extraScrollHeight={130}>
      {children}
    </KeyboardAwareScrollView>
  );
};

export default KeyboardAvoidLayout;
