import React, { memo } from 'react';
import styled from 'styled-components';
import { Loading } from '../../../../shared/components/atoms/Loading';
import {
  useGetCurrentWeatherByCityQuery,
  useGetForecastWeatherByCityQuery,
} from '../../../../shared/store/reducers/api/openWeather';
import { CurrentDayWeather } from '../organisms/CurrentDayWeather';
import { TodayTimeline } from '../organisms/TodayTimeline';
import { WeekAndMonthWeather } from '../organisms/weekAndMonth/WeekAndMonthWeather';

const Container = styled.div`
  width: 100%;
  @media screen and (min-width: ${(props) => props.theme.breakpoint.lg}px) {
    width: 70%;
  }
`;

const Header = styled.header`
  height: 44rem;
`;

const Body = styled.section`
  display: block;
  height: auto;
  margin-top: 3rem;

  @media screen and (min-width: ${(props) => props.theme.breakpoint.md}px) {
    height: 46.4rem;
    display: flex;
    gap: 5rem;
  }
`;

const ContainerTimeline = styled.section`
  width: 100%;
  height: 46.4rem;
  @media screen and (min-width: ${(props) => props.theme.breakpoint.md}px) {
    width: 30%;
  }
`;

const ContainerWeek = styled.section`
  width: 100%;
  height: 46.4rem;
  @media screen and (min-width: ${(props) => props.theme.breakpoint.md}px) {
    width: 70%;
  }
`;

const Main = memo(() => {
  const {
    data: currentWeather,
    error: errorCurrentWeather,
    isLoading: isLoadingCurrentWeather,
  } = useGetCurrentWeatherByCityQuery('milan');

  const {
    data: forecastWeather,
    error: errorForecastWeather,
    isLoading: isLoadingForecastWeather,
  } = useGetForecastWeatherByCityQuery('milan');

  if (!currentWeather || errorCurrentWeather || !forecastWeather || errorForecastWeather)
    return <div>Error: {JSON.stringify(errorCurrentWeather)}</div>;
  if (isLoadingCurrentWeather || isLoadingForecastWeather) return <Loading />;

  return (
    <Container>
      <Header>
        <CurrentDayWeather />
      </Header>
      <Body>
        <ContainerTimeline>
          <TodayTimeline />
        </ContainerTimeline>
        <ContainerWeek>
          <WeekAndMonthWeather />
        </ContainerWeek>
      </Body>
    </Container>
  );
});

Main.displayName = 'Main';
export { Main };
