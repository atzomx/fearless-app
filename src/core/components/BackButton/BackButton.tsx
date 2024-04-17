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
      color={theme.palette.grey['100']}
      sx={{
        button: {
          height: 52,
          width: 52,
        },
      }}>
      <BackIcon color={theme.palette.grey[600]} height={24} width={24} />
    </IconButton>
  );
};

export default BackButton;
