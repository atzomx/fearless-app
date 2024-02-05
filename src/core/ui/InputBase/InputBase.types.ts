import { NativeSyntheticEvent, ViewProps } from 'react-native';

export type InputStatus = 'error' | 'focus' | 'default';

export type RefElement = { focus: () => void };

export type InputBaseChildrenProps<K extends any> = {
  value?: K;
  onChangeText?: (text?: K) => void;
  placeholder?: string;
  placeholderTextColor?: string;
  onFocus?: <T extends {}>(e: NativeSyntheticEvent<T>) => void;
  onBlur?: <T extends {}>(e: NativeSyntheticEvent<T>) => void;
  ref?: React.Ref<RefElement>;
  style?: ViewProps['style'];
};
