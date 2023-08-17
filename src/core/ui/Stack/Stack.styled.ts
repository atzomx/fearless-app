import styled from 'styled-components/native';

export const StackContainer = styled.View<{
  fullWidth: boolean;
  width?: number | string;
  fullHeight: boolean;
  height?: number | string;
}>(({ fullWidth, width, fullHeight, height }) => ({
  width: fullWidth ? '100%' : width,
  height: fullHeight ? '100%' : height,
}));
