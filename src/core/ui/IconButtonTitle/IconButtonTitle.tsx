import React, { FC } from 'react';

import { SvgProps } from 'react-native-svg';
import { useTheme } from 'styled-components/native';

import Container from '../Container';
import IconButton, { IconButtonProps } from '../IconButton/IconButton';
import Text from '../Text';

type IconButtonTitleProps = Pick<IconButtonProps, 'onPress'> & {
  title: string;
  icon: (props: SvgProps) => React.JSX.Element;
};

const IconButtonTitle: FC<IconButtonTitleProps> = ({
  onPress,
  icon: Icon,
  title,
}) => {
  const theme = useTheme();
  return (
    <Container>
      <IconButton
        onPress={onPress}
        variant="contained"
        color="secondary"
        sx={{
          button: {
            height: 64,
            width: 64,
            backgroundColor: theme.palette.grey['200'],
          },
        }}>
        <Icon height={28} width={28} color={theme.palette.common.black} />
      </IconButton>
      <Text align="center" variant="caption">
        {title}
      </Text>
    </Container>
  );
};

export default IconButtonTitle;
