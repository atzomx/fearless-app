import React, { FC } from 'react';

import { useTheme } from 'styled-components/native';

import { BackIcon } from '@core/icons';
import { IconButton, IconButtonProps } from '@core/ui';

const BackButton: FC<IconButtonProps> = props => {
  const theme = useTheme();
  return (
    <IconButton
      {...props}
      variant="contained"
      color={theme.pallete.grey['100']}
      sx={{
        button: {
          height: 36,
          width: 36,
        },
      }}>
      <BackIcon color={theme.pallete.grey[600]} height={18} width={18} />
    </IconButton>
  );
};

export default BackButton;
