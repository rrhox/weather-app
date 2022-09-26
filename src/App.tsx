import React from 'react';
import styled from 'styled-components';
import { Typography } from './shared/components/atoms/Typography';
import { configurations } from './shared/configurations';

import { AppRoutes } from './shared/routes';

export const Error = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AppContainer = styled.main`
  margin: 5rem;
  background: ${(props) => props.theme.colors.grey[100]};
`;

export const App = () => {
  if (!configurations.api.openWeather.secretKey) {
    return (
      <Error>
        <Typography variant="subtitle2" weight="bold">
          {`Enter the openweather api key in the`} <code>/.env</code> file
        </Typography>
      </Error>
    );
  }
  return (
    <AppContainer>
      <AppRoutes />
    </AppContainer>
  );
};
