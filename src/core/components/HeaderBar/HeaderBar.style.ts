import styled from 'styled-components/native';

export const Container = styled.View(({ theme }) => ({
  flexDirection: 'row',
  justifyContent: 'space-between',
  justifyItems: 'center',
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(1),
}));

export const ContainerTitle = styled.View({
  alignContent: 'center',
  justifyContent: 'center',
});

export const ContainerBack = styled.View({});
