/* eslint-disable react/no-unstable-nested-components */
import React, { FC, useLayoutEffect } from 'react';
import { Platform, StatusBar } from 'react-native';

import ImageView from 'react-native-image-viewing';
import { useTheme } from 'styled-components/native';

import { Text } from '@core/ui';

const platform = Platform.OS;

export type ImageCarrouselViewerProps = React.ComponentProps<typeof ImageView>;

const ImageCarrouselViewer: FC<ImageCarrouselViewerProps> = ({
  visible,
  ...props
}) => {
  const theme = useTheme();

  useLayoutEffect(() => {
    const background = theme.palette.colors[visible ? 'black' : 'white'];
    const content = visible ? 'light-content' : 'dark-content';
    if (platform === 'android') {
      StatusBar.setBackgroundColor(background);
      StatusBar.setBarStyle(content);
      StatusBar.setTranslucent(true);
    }
  }, [theme, visible]);

  return (
    <ImageView
      {...props}
      visible={visible}
      doubleTapToZoomEnabled
      presentationStyle="fullScreen"
      FooterComponent={({ imageIndex }) => (
        <Text align="center" fontSize={16} color="white">
          {imageIndex + 1} / {props.images.length}
        </Text>
      )}
    />
  );
};

export default ImageCarrouselViewer;
