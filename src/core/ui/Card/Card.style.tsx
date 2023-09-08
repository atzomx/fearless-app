import { Shadow as ShadowBase } from 'react-native-shadow-2';
import styled from 'styled-components/native';

export const Container = styled.View(({ theme }) => ({
  borderRadius: theme.spacing(2),
}));

export const Shadow = styled(ShadowBase)({
  width: '100%',
});
