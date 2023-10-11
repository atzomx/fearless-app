import React from 'react';

import styled from 'styled-components/native';

const StyledDivider = styled.View(({ theme }) => ({
  height: 1,
  backgroundColor: theme.pallete.grey[300],
}));

const Divider = () => <StyledDivider />;

export default Divider;
