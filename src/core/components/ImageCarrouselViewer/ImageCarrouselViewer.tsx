/* eslint-disable react/no-unstable-nested-components */
import React, { FC } from 'react';

import ImageView from 'react-native-image-viewing';

import { Text } from '@core/ui';

export type ImageCarrouselViewerProps = React.ComponentProps<typeof ImageView>;

const ImageCarrouselViewer: FC<ImageCarrouselViewerProps> = ({ ...props }) => {
  return (
    <ImageView
      {...props}
      FooterComponent={({ imageIndex }) => (
        <Text align="center" fontSize={16} color="white">
          {imageIndex + 1} / {props.images.length}
        </Text>
      )}
    />
  );
};

export default ImageCarrouselViewer;
