import React from 'react';

import * as S from './ImageCarrousel.style';

export type ImageCarrouselProps = {
  images: Array<string>;
};

const ImageCarrousel: React.FC<ImageCarrouselProps> = ({ images }) => {
  return (
    <S.ImageContainer>
      {images.map(image => (
        <S.Image key={image} source={{ uri: image }} />
      ))}
    </S.ImageContainer>
  );
};

export default ImageCarrousel;
