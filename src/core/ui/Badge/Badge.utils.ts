import { CSSObject } from 'styled-components';

import {
  AlignHorizontal,
  AlignVertical,
  BadgeVariant,
} from '@core/theme/theme';

export const getBadgeAligmentStyle = ({
  horizontal,
  vertical,
}: {
  horizontal: AlignHorizontal;
  vertical: AlignVertical;
}): CSSObject => {
  const horizontalValue = {
    left: {
      left: 0,
    },
    right: {
      right: -4,
    },
  };
  const verticalValue = {
    bottom: {
      bottom: 2,
    },
    top: {
      top: -1,
    },
  };

  const variants = {
    ...horizontalValue[horizontal],
    ...verticalValue[vertical],
  };
  return variants;
};

export const getBadgeVariantStyle = ({
  variant,
  alignment,
}: {
  variant: BadgeVariant;
  alignment: { horizontal: AlignHorizontal; vertical: AlignVertical };
}): CSSObject => {
  const variants = {
    standard: {
      height: 15,
      ...getBadgeAligmentStyle(alignment),
    },
    dot: {
      height: 10,
      ...getBadgeAligmentStyle(alignment),
    },
  };
  return variants[variant];
};

export const getBadgeValueVariantStyle = ({
  variant,
}: {
  variant: BadgeVariant;
}): CSSObject => {
  const variants = {
    standard: {},
    dot: {
      display: 'none',
    },
  };
  return variants[variant];
};
