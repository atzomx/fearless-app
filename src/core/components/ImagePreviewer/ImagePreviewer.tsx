import React, { FC, useMemo, useState } from 'react';

import { File } from '@core/interfaces/IFile';
import { Container, Text } from '@core/ui';

import * as S from './ImagePreviewer.style';

import ImageCarrouselViewer from '../ImageCarrouselViewer';

export type ImagePreviewerProps = {
  images: File[];
  maxShowed: number;
};

const ImagePreviewer: FC<ImagePreviewerProps> = ({ images, maxShowed }) => {
  const [currentFile, setCurrentFile] = useState<number | null>(null);

  const RENDER = useMemo(() => {
    const newImages =
      maxShowed < images.length ? [...images].splice(0, maxShowed) : images;

    const moreNumbrer = images.length - maxShowed;
    const IMAGES = newImages.map(({ uri }, index) => (
      <S.ImageContainer
        activeOpacity={0.8}
        onPress={() => setCurrentFile(index)}
        key={`image-preview-${Math.random()}`}>
        <S.Image source={{ uri }} />
      </S.ImageContainer>
    ));
    IMAGES.push(
      <S.More
        activeOpacity={0.8}
        onPress={() => setCurrentFile(maxShowed)}
        key={`image-preview-${Math.random()}`}>
        <Text fontWeight="Regular" fontSize={20}>
          {moreNumbrer}+
        </Text>
      </S.More>,
    );
    return IMAGES;
  }, [images, maxShowed]);

  return (
    <>
      <Container alignSelf="center" direction="horizontal">
        {RENDER}
      </Container>
      <ImageCarrouselViewer
        images={images}
        imageIndex={currentFile ?? 0}
        visible={currentFile !== null}
        onRequestClose={() => setCurrentFile(null)}
      />
    </>
  );
};

export default ImagePreviewer;
