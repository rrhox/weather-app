import React from 'react';

import { WeatherCard } from '../components/WeatherCard';
import { Button } from '../../../shared/components/atoms/Button';
import styled from 'styled-components';
import { Main } from '../components/organisms/Main';
import { Sidebar } from '../components/organisms/Sidebar';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: ${(props) => props.theme.colors.grey[100]};
  display: flex;
`;

export const Home = () => {
  return (
    <Container>
      <Main></Main>
      <Sidebar>
        <Button variant="text" withIcon="plus">
          Aggiungi città
        </Button>
        <WeatherCard title="London" />
        <Button variant="contained" withIcon="location" onClick={() => console.log('click')}>
          Add Localization
        </Button>
      </Sidebar>
    </Container>
  );
};
