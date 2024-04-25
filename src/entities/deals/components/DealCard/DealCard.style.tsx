import styled from 'styled-components/native';

import { Card, Text } from '@core/ui';

export const AmountContainer = styled.View({
  flex: 2 / 5,
  justifyContent: 'flex-end',
});

export const DealerContainer = styled.View({
  flex: 3 / 5,
  justifyContent: 'flex-end',
});

export const CardContainer = styled(Card)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: theme.palette.common.white,
  borderColor: theme.palette.grey[200],
  borderWidth: 1,
  borderStyle: 'solid',
}));

export const ItemStatus = styled.View(({ theme }) => ({
  color: theme.palette.background,
  backgroundColor: theme.palette.common.black,
  padding: theme.spacing(0.5, 1),
  borderRadius: theme.spacing(1),
  justifyContent: 'center',
}));

export const Identifier = styled(Text)(({ theme }) => ({
  color: theme.palette.grey[400],
  fontFamily: theme.font.Bold,
  fontSize: 12,
}));

export const SeparatorContainer = styled.View(({ theme }) => ({
  marginTop: theme.spacing(0.5),
  alignItems: 'center',
}));

export const Separator = styled.View(({ theme }) => ({
  height: 1,
  width: '90%',
  backgroundColor: theme.palette.grey[100],
}));

export const FooterContainer = styled.View({
  flexDirection: 'row',
  justifyContent: 'space-between',
});
