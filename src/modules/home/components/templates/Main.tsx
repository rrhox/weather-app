import React, { memo } from 'react';
import styled from 'styled-components';
import { Loading } from '../../../../shared/components/atoms/Loading';

import { useGetWeatherInfoAboutCity } from '../../hooks/useGetWeatherInfoAboutCity';
import { CurrentDayWeather } from '../organisms/CurrentDayWeather';
import { TodayTimeline } from '../organisms/TodayTimeline';
import { TabsWeather } from '../organisms/tab/TabsWeather';

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
  const { isLoading, isErrors } = useGetWeatherInfoAboutCity();
  if (isLoading) return <Loading />;

  return (
    <Container>
      {isErrors ? (
        <div>Error</div>
      ) : (
        <>
          <Header>
            <CurrentDayWeather />
          </Header>
          <Body>
            <ContainerTimeline>
              <TodayTimeline />
            </ContainerTimeline>
            <ContainerWeek>
              <TabsWeather />
            </ContainerWeek>
          </Body>
        </>
      )}
    </Container>
  );
});

Main.displayName = 'Main';
export { Main };
