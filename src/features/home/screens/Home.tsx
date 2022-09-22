import React from 'react';
import { Button } from '../../../shared/components/atoms/Button';

import { WeatherCard } from '../components/WeatherCard';

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
      </Sidebar>
    </Container>
  );
};
