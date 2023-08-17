import { Dimensions } from 'react-native';

import styled from 'styled-components/native';

const { width, height } = Dimensions.get('window');

export const ImageContainer = styled.TouchableOpacity({
  height: height * 0.7,
  width: width * 0.8,
});

export const Image = styled.Image({
  flex: 1,
  width: '100%',
  height: '100%',
  borderRadius: 10,
});
