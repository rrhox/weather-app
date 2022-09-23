import React from 'react';

import { WeatherCard } from '../components/molecules/WeatherCard';
import { Button } from '../../../shared/components/atoms/Button';
import styled from 'styled-components';
import { Main } from '../components/templates/Main';
import { Sidebar } from '../components/templates/Sidebar';

import { TodayTimeline } from '../components/organisms/TodayTimeline';
import { WeekWeather } from '../components/organisms/WeekWeather';

import { Body } from '../components/templates/Body';
import { CurrentDayWeather } from '../components/organisms/CurrentDayWeather';
import { Header } from '../components/templates/Header';

export const Container = styled.div`
  width: 100%;
  display: flex;
  @media (max-width: 1080px) {
    display: block;
  }
`;

export const Home = () => {
  return (
    <Container>
      <Main>
        <Header>
          <CurrentDayWeather title="" />
        </Header>

        <Body>
          <div>
            <TodayTimeline />
          </div>
          <div>
            <WeekWeather />
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
