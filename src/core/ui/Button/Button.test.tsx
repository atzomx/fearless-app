/**
 * @format
 */
import React from 'react';

import { fireEvent, render } from '@testing-library/react-native';

import ThemeProvider from '@core/providers/Theme';

import Button from '../Button';

const caption = 'hola mundo';

const ButtonWrapper = (props: React.ComponentProps<typeof Button>) => (
  <ThemeProvider>
    <Button {...props} />
  </ThemeProvider>
);

it('render a Button', () => {
  const onPress = jest.fn();
  const { getByText } = render(
    <ButtonWrapper title={caption} onPress={onPress} />,
  );
  const button = getByText(caption);
  expect(getByText(caption)).toBeTruthy();
  fireEvent.press(button);
  expect(onPress).toHaveBeenCalled();
});
