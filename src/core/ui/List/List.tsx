import React, { FC, PropsWithChildren } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { SvgProps } from 'react-native-svg';
import { useTheme } from 'styled-components';

import { ChevronIcon } from '@core/icons';

import Container from '../Container';
import DividerUi from '../Divider';
import TextUi from '../Text';

const Divider: FC = () => {
  return (
    <Container ph={2}>
      <DividerUi />
    </Container>
  );
};

const Text: FC<PropsWithChildren> = ({ children }) => {
  const theme = useTheme();
  return (
    <TextUi
      color={theme.palette.colors.black}
      fontWeight="Medium"
      fontSize={14}>
      {children}
    </TextUi>
  );
};

const Icon: FC<{ icon: FC<SvgProps> }> = ({ icon: CustomIcon }) => {
  const theme = useTheme();
  return (
    <CustomIcon
      strokeWidth={1.5}
      color={theme.palette.colors.black}
      height={theme.spacingSingle(2.5)}
    />
  );
};

const Item: FC<TouchableOpacityProps & { icon?: boolean }> = ({
  children,
  icon = true,
  ...props
}) => {
  const theme = useTheme();
  return (
    <Container
      height={theme.spacingSingle(6)}
      component={TouchableOpacity}
      direction="row"
      alignItems="center"
      fullWidth
      {...props}>
      <Container
        direction="row"
        justifyContent="center"
        flexBasis="auto"
        flexShrink={0}
        spacing={1}
        flexGrow={0}>
        {children}
      </Container>
      {icon && (
        <Container
          alignItems="flex-end"
          flexBasis="auto"
          flexGrow={4}
          flexShrink={4}>
          <ChevronIcon
            strokeWidth={2}
            color={theme.palette.colors.black}
            height={theme.spacingSingle(1.5)}
          />
        </Container>
      )}
    </Container>
  );
};

type ListProps = FC<React.PropsWithChildren> & {
  Icon: typeof Icon;
  Text: typeof Text;
  Item: typeof Item;
  Divider: typeof Divider;
};

const List: ListProps = ({ children }) => {
  return (
    <Container p={2} spacing={0}>
      {children}
    </Container>
  );
};

List.Icon = Icon;
List.Text = Text;
List.Item = Item;
List.Divider = Divider;

export default List;
