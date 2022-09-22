import React from 'react';
import styled from 'styled-components';

import { AppRoutes } from './shared/routes';

export const AppContainer = styled.main`
  height: calc(100vh - 10rem);
  margin: 5rem;
  /* border: 1px solid black; */
`;

export const App = () => {
  return (
    <AppContainer>
      <AppRoutes />
    </AppContainer>
  );
};
