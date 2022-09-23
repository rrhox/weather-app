import React, { useEffect } from 'react';

import { WeatherCard } from '../components/molecules/WeatherCard';
import { Button } from '../../../shared/components/atoms/Button';
import styled from 'styled-components';
import { Main } from '../components/templates/Main';
import { Sidebar } from '../components/templates/Sidebar';

import { TodayTimeline } from '../components/organisms/TodayTimeline';
import { WeekAndMonthWeather } from '../components/organisms/weekAndMonth/WeekAndMonthWeather';
import { format } from 'date-fns';
import { Body } from '../components/templates/Body';
import { CurrentDayWeather } from '../components/organisms/CurrentDayWeather';
import { Header } from '../components/templates/Header';
import { BaseMargin } from '../../../shared/styles/BaseMargin';
import { useGetCurrentWeatherByCityQuery } from '../../../shared/store/reducers/api/openWeather';
import { Loading } from '../../../shared/components/atoms/Loading';
import { Input } from '../../../shared/components/atoms/Input';
import { SectionWithTitle } from '../../../shared/components/molecules/SectionWithTitle';

const Container = styled.div`
  width: 100%;
  display: flex;
  @media (max-width: 1080px) {
    display: block;
  }
`;

const ContainerWeatherCard = styled.div`
  width: 100%;
`;

const Divider = styled.div`
  ${BaseMargin}
`;

export const Home = () => {
  const {
    data: currentWeather,
    error: errorCurrentWeather,
    isLoading: isLoadingCurrentWeather,
  } = useGetCurrentWeatherByCityQuery('london');

  if (!currentWeather || errorCurrentWeather) return <div>Error: {JSON.stringify(errorCurrentWeather)}</div>;
  if (isLoadingCurrentWeather) return <Loading />;

  return (
    <Container>
      <Main>
        <Header>
          <CurrentDayWeather />
        </Header>

        <Body>
          <div>
            <TodayTimeline />
          </div>
          <div>
            <WeekAndMonthWeather />
          </div>
        </Body>
      </Main>
      <Sidebar>
        <Divider mt={5} />
        <Button variant="text" withIcon="plus">
          Aggiungi città
        </Button>
        <Divider mb={5} />
        <ContainerWeatherCard>
          <WeatherCard
            city={currentWeather.city}
            day={format(currentWeather?.date, 'EEEE d,')}
            hour={format(currentWeather?.date, 'h:mm aaa')}
            month={format(currentWeather?.date, 'MMMM')}
            temperature={currentWeather?.temperature}
            weather={currentWeather?.weather}
            index={0}
          />
          <WeatherCard
            city={currentWeather.city}
            day={format(currentWeather?.date, 'EEEE d,')}
            hour={format(currentWeather?.date, 'h:mm aaa')}
            month={format(currentWeather?.date, 'MMMM')}
            temperature={currentWeather.temperature}
            weather={currentWeather?.weather}
            index={3}
          />
        </ContainerWeatherCard>
        <Divider mb={2} />
        <SectionWithTitle title="Search">
          <Input placeholder="ex: Miami" onClick={() => console.log('ewe')} />
        </SectionWithTitle>
        <Divider mt={4} />
        <SectionWithTitle title="Localization">
          <Button variant="contained" withIcon="location" onClick={() => console.log('click')}>
            Add Localization
          </Button>
        </SectionWithTitle>
      </Sidebar>
    </Container>
  );
};
