import styled from 'styled-components/native';

export const TabsContainer = styled.View({
  flex: 1,
  flexDirection: 'row',
});

export const TabContent = styled.TouchableOpacity<{ active: boolean }>(
  ({ theme, active }) => ({
    justifyContent: 'center',
    alignItems: 'center',
    height: theme.spacing(3.75),
    borderRadius: theme.spacing(1),
    padding: theme.spacing(0.7, 1.5),
    ...(active && {
      backgroundColor: theme.pallete.grey[100],
    }),
  }),
);

export const ActionsContainer = styled.View({
  justifyContent: 'center',
  alignItems: 'center',
});
