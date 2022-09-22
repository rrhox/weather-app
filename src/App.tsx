import React from 'react';
import styled from 'styled-components';

import { AppRoutes } from './shared/routes';

export const AppContainer = styled.main`
  margin: 5rem;
  background: ${(props) => props.theme.colors.grey[100]};
`;

export const App = () => {
  return (
    <AppContainer>
      <AppRoutes />
    </AppContainer>
  );
};
