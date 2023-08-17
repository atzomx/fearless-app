import styled from 'styled-components/native';

export const Container = styled.View<{ focused: boolean }>(({ focused }) => ({
  justifyContent: 'center',
  alignItems: 'center',
  height: 40,
  width: 40,
  borderRadius: 20,
  backgroundColor: focused ? '#fff' : 'unset',
}));
