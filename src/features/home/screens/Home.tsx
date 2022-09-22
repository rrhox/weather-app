import React from 'react';

import { WeatherCard } from '../components/WeatherCard';
import { Button } from '../../../shared/components/atoms/Button';
import styled from 'styled-components';
import { Main } from '../components/organisms/Main';
import { Sidebar } from '../components/organisms/Sidebar';
// import { CurrentDayWeather } from '../components/organisms/CurrentDayWeather';
import { TodayWeather } from '../components/organisms/TodayWeather';
import { WeekWeather } from '../components/organisms/WeekWeather';
import { Header } from '../components/organisms/Header';
import { Body } from '../components/organisms/Body';

export const Container = styled.div`
  width: 100%;
  display: flex;
`;

export const Home = () => {
  return (
    <Container>
      <Main>
        <Header>{/* <CurrentDayWeather title="h" /> */}</Header>

        <Body>
          <div>
            <TodayWeather />
          </div>
          <div>
            <WeekWeather title="h" />
          </div>
        </Body>
      </Main>
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
