import React from 'react';

import styled from 'styled-components/native';

import { ThemedStyled } from '@core/theme';
import { Text } from '@core/ui';

import { VariantStatus } from './DealStatus.model';

const COLOR_BORDER: { [key in VariantStatus]: string } = {
  WAITING: '#00546F',
};

const COLOR_BACKG: { [key in VariantStatus]: string } = {
  WAITING: '#B8FDEC',
};

export const Container = styled.View<{ variant: VariantStatus }>(
  ({ variant, theme }) => ({
    flexDirection: 'row',
    borderRadius: theme.spacing(1),
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: COLOR_BORDER[variant],
    alignItems: 'center',
    height: theme.spacing(3),
    position: 'relative',
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(1),
  }),
);

export const Status = styled((props: ThemedStyled) => <Text {...props} />)<{
  variant: VariantStatus;
}>(({ variant, theme }) => ({
  color: COLOR_BORDER[variant],
  fontFamily: theme.font.SemiBold,
  fontSize: 10,
}));

export const IconContainer = styled.View<{ variant: VariantStatus }>(
  ({ variant, theme }) => ({
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: theme.spacing(1),
    borderColor: COLOR_BORDER[variant],
    backgroundColor: COLOR_BACKG[variant],
    height: theme.spacing(3),
    width: theme.spacing(3),
    position: 'absolute',
    top: -1,
    left: -1,

    justifyContent: 'center',
    alignItems: 'center',
  }),
);
