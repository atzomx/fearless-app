import React, { FC, useRef } from 'react';
import { Animated, ViewProps } from 'react-native';

type FadeFunctions = { fadeIn: () => void; fadeOut: () => void };

export type ButtonBaseProps = Omit<ViewProps, 'children'> & {
  disable?: boolean;
  children: ({ fadeIn, fadeOut }: FadeFunctions) => React.ReactNode;
};

const ButtonBase: FC<ButtonBaseProps> = ({
  disable,
  style,
  children,
  ...props
}) => {
  const animated = useRef(new Animated.Value(1)).current;

  const fadeIn = () => {
    if (disable) return;
    Animated.timing(animated, {
      toValue: 0.8,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    if (disable) return;
    Animated.timing(animated, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View {...props} style={[style, { opacity: animated }]}>
      {children({ fadeIn, fadeOut })}
    </Animated.View>
  );
};

export default ButtonBase;
