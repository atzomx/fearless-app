import styled from 'styled-components/native';

import { TextWeight } from '@core/theme';

export const Container = styled.TouchableOpacity({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  width: '100%',
});

export const Input = styled.TextInput<{
  fontSize?: number;
  fontWeight?: TextWeight;
  focus?: Boolean;
  color?: string;
}>(({ fontSize, fontWeight, theme, focus, color }) => ({
  ...(focus && {}),
  fontSize,
  fontFamily: fontWeight && theme.font[fontWeight],
  width: '80%',
  textAlign: 'center',
  padding: 0,
  color,
}));
