import { NativeSyntheticEvent, ViewProps } from 'react-native';

export type InputStatus = 'error' | 'focus' | 'default';

export type RefElement = { focus: () => void };

export type InputBaseChildrenProps = {
  placeholder?: string;
  placeholderTextColor?: string;
  value?: string;
  onFocus?: <T extends {}>(e: NativeSyntheticEvent<T>) => void;
  onBlur?: <T extends {}>(e: NativeSyntheticEvent<T>) => void;
  onChangeText?: (text?: string) => void;
  ref?: React.Ref<RefElement>;
  style?: ViewProps['style'];
};
