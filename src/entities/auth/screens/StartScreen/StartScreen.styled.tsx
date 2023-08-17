import styled from 'styled-components/native';

import { Text, Button as ButtonUi } from '@core/ui';

export const Title = styled(Text)(({ theme }) => ({
  width: '80%',
  marginTop: 16,
  color: theme.pallete.secondary.dark,
  textAlign: 'center',
}));

export const SubTitle = styled(Text)({
  width: '80%',
  textAlign: 'center',
});

export const Caption = styled(Text)(({ theme }) => ({
  color: theme.pallete.secondary.main,
}));

export const BottomContainer = styled.View(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  height: '45%',
  bottom: 0,
  backgroundColor: theme.pallete.common.white,
  padding: 24,
  paddingTop: 0,
  justifyContent: 'space-around',
  alignItems: 'center',
  borderTopLeftRadius: 50,
  borderTopRightRadius: 50,
}));

export const Button = styled(ButtonUi)(() => ({
  width: '50%',
}));
