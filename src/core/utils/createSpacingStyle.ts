import { ISpacingContainer } from '@core/interfaces';
import { Theme } from '@core/theme';

export const createSpacingStyle = (
  theme: Theme,
  {
    p = 0,
    pt = 0,
    pb = 0,
    pr = 0,
    pl = 0,
    pv = 0,
    ph = 0,
    m = 0,
    mt = 0,
    mb = 0,
    mr = 0,
    ml = 0,
    mv = 0,
    mh = 0,
  }: ISpacingContainer,
) => {
  return {
    paddingTop: theme.spacingSingle(pt || pv || p),
    paddingBottom: theme.spacingSingle(pb || pv || p),
    paddingLeft: theme.spacingSingle(pl || ph || p),
    paddingRight: theme.spacingSingle(pr || ph || p),

    marginTop: theme.spacingSingle(mt || mv || m),
    marginBottom: theme.spacingSingle(mb || mv || m),
    marginLeft: theme.spacingSingle(ml || mh || m),
    marginRight: theme.spacingSingle(mr || mh || m),
  };
};
