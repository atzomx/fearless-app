import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled.View({
  flexDirection: 'row',
  justifyContent: 'space-between',
  justifyItems: 'center',
});

export const ContainerTitle = styled.View({
  alignContent: 'center',
  justifyContent: 'center',
});

export const ContainerBack = styled.View({});

export const ContainerView = styled(SafeAreaView)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  padding: theme.spacing(1, 2),
}));
