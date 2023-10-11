import React, { FC } from 'react';
import { TouchableOpacity, View } from 'react-native';

import { useTheme } from 'styled-components/native';

import CheckboxBlankIcon from '@core/icons/CheckboxBlankIcon';
import CheckboxIcon from '@core/icons/CheckboxIcon';

import Container from '../Container';
import Text from '../Text';

export type CheckboxProps = {
  label?: string;
  value: boolean;
  onChange: (value: boolean) => void;
};

const Checkbox: FC<CheckboxProps> = ({ label, value, onChange }) => {
  const theme = useTheme();

  const toggleCheckbox = () => {
    onChange(!value);
  };

  const getCheckboxSvg = () => {
    if (value) return <CheckboxIcon color={theme.pallete.common.black} />;
    return <CheckboxBlankIcon color={theme.pallete.common.black} />;
  };

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={toggleCheckbox}>
      <Container direction="horizontal" alignSelf="flex-start">
        <View>{getCheckboxSvg()}</View>
        {label && <Text>{label}</Text>}
      </Container>
    </TouchableOpacity>
  );
};

export default Checkbox;
