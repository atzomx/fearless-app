import React, { FC, ReactNode, useMemo } from 'react';

import {
  AlignHorizontal,
  AlignVertical,
  BadgeVariant,
  ColorVariant,
} from '@core/theme/types';

import * as S from './Badge.style';

type BadgeProps = {
  color?: ColorVariant;
  max?: number;
  value?: number;
  alignment?: { horizontal: AlignHorizontal; vertical: AlignVertical };
  variant?: BadgeVariant;
  children?: ReactNode;
  showZero?: boolean;
};

const Badge: FC<BadgeProps> = ({
  color = 'primary',
  variant = 'standard',
  alignment = { vertical: 'top', horizontal: 'right' },
  children,
  value,
  max,
  showZero = false,
  ...props
}) => {
  const valueFinal = useMemo(() => {
    if (max && value && value > max) return `${max}+`;
    return value;
  }, [value, max]);

  const showBagde = useMemo(() => {
    return showZero || value !== 0;
  }, [value, showZero]);

  return (
    <S.BadgeView>
      <S.BadgeContainer>
        {children}
        {showBagde && (
          <S.BadgeCircle
            color={color}
            variant={variant}
            alignment={alignment}
            {...props}>
            <S.BadgeValue variant={variant}>{valueFinal}</S.BadgeValue>
          </S.BadgeCircle>
        )}
      </S.BadgeContainer>
    </S.BadgeView>
  );
};

export default Badge;
