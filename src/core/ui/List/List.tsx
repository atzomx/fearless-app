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

const Description: FC<PropsWithChildren> = ({ children }) => {
  const theme = useTheme();
  return (
    <TextUi color={theme.palette.grey[600]} fontWeight="Regular" fontSize={12}>
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

const Item: FC<
  TouchableOpacityProps & { iconArrow?: boolean; icon: FC<SvgProps> }
> = ({ children, iconArrow = true, icon, onPress, ...props }) => {
  const theme = useTheme();
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
      <Container
        height={theme.spacingSingle(8)}
        direction="row"
        alignItems="center"
        fullWidth
        borderWidth={1}
        borderRadius={10}
        borderStyle="solid"
        p={1}
        borderColor={theme.palette.grey[300]}
        {...props}>
        <Container
          direction="row"
          alignItems="center"
          flexBasis="auto"
          flexShrink={0}
          spacing={1}
          flexGrow={0}>
          {icon && <Icon icon={icon} />}
          <Container direction="column">{children}</Container>
        </Container>
        {iconArrow && (
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
    </TouchableOpacity>
  );
};

type ListProps = FC<React.PropsWithChildren> & {
  Text: typeof Text;
  Item: typeof Item;
  Divider: typeof Divider;
  Description: typeof Description;
};

const List: ListProps = ({ children }) => {
  return (
    <Container p={2} spacing={1}>
      {children}
    </Container>
  );
};

List.Text = Text;
List.Item = Item;
List.Divider = Divider;
List.Description = Description;

export default List;
