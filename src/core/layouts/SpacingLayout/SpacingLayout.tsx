import React from 'react';

import { Spacer } from '../../ui';

export type SpacingLayoutProps = React.PropsWithChildren & { spacing?: number };

const SpacingLayout: React.FC<SpacingLayoutProps> = ({ children, spacing }) => {
  const ArrayChildren = React.Children.toArray(children);
  return (
    <>
      {ArrayChildren.map((child, index) => (
        <React.Fragment key={`spacing-layout-fragment-${index}`}>
          {child}
          {index !== ArrayChildren.length - 1 && (
            <Spacer key={`spacing-layout-spacer-${index}`} spacing={spacing} />
          )}
        </React.Fragment>
      ))}
    </>
  );
};

export default SpacingLayout;
