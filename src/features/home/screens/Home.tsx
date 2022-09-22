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
        <WeatherCard title="London" />

        <Button variant="text" label="Aggiungi città" withIcon="plus">
          Add Location
        </Button>
        <Button variant="button" label="Add Location" withIcon="location" onClick={() => console.log('click')}>
          Add Location
        </Button>
      </Sidebar>
    </Container>
  );
};
