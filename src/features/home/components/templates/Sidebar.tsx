import React, { memo } from 'react';
import { format } from 'date-fns';
import styled from 'styled-components';
import { Button } from '../../../../shared/components/atoms/Button';
import { Input } from '../../../../shared/components/atoms/Input';
import { Loading } from '../../../../shared/components/atoms/Loading';
import { SectionWithTitle } from '../../../../shared/components/molecules/SectionWithTitle';
import { useGetCurrentWeatherByCityQuery } from '../../../../shared/store/reducers/api/openWeather';
import { BaseMargin } from '../../../../shared/styles/BaseMargin';
import { WeatherCard } from '../molecules/WeatherCard';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

  width: 100%;
  margin-left: 0;

  @media screen and (min-width: ${(props) => props.theme.breakpoint.lg}px) {
    width: 30%;
    margin-left: 5rem;
  }
`;

const ContainerWeatherCard = styled.div`
  width: 100%;
`;

const Divider = styled.div`
  ${BaseMargin}
`;

const Sidebar = memo(() => {
  const {
    data: currentWeatherLondon,
    error: errorCurrentWeatherLondon,
    isLoading: isLoadingCurrentWeatherLondon,
  } = useGetCurrentWeatherByCityQuery('london');

  const {
    data: currentWeatherRome,
    error: errorCurrentWeatherRome,
    isLoading: isLoadingCurrentWeatherRome,
  } = useGetCurrentWeatherByCityQuery('rome');

  if (errorCurrentWeatherRome || errorCurrentWeatherLondon) return <div>Error</div>;
  if (!currentWeatherRome || !currentWeatherLondon || isLoadingCurrentWeatherLondon || isLoadingCurrentWeatherRome)
    return <Loading />;
  const dd = new Date(new Date().getTime() - 3600 * 1000);
  const dd2 = new Date(new Date().getTime() - 14400 * 1000);
  console.log({ dd, dd2 });
  return (
    <Container>
      <Divider mt={5} />
      <Button variant="text" withIcon="plus">
        Aggiungi città
      </Button>
      <Divider mb={5} />
      <ContainerWeatherCard>
        <WeatherCard
          city={currentWeatherLondon.city}
          day={format(new Date(currentWeatherRome?.date), 'EEEE d,')}
          hour={format(new Date(currentWeatherRome?.date), 'h:mm aaa')}
          month={format(new Date(currentWeatherRome?.date), 'MMMM')}
          temperature={currentWeatherLondon?.temperature}
          weather={currentWeatherLondon?.weather}
          index={0}
        />
        <WeatherCard
          city={currentWeatherRome.city}
          day={format(new Date(currentWeatherRome?.date), 'EEEE d,')}
          hour={format(new Date(currentWeatherRome?.date).getTime() - (-14400 / 60) * 1000, 'h:mm aaa')}
          month={format(new Date(currentWeatherRome?.date), 'MMMM')}
          temperature={currentWeatherRome.temperature}
          weather={currentWeatherRome?.weather}
          index={3}
        />
      </ContainerWeatherCard>
      <Divider mb={2} />
      <SectionWithTitle title="Search">
        <Input placeholder="ex: Miami" />
      </SectionWithTitle>
      <Divider mt={4} />
      <SectionWithTitle title="Localization">
        <Button variant="contained" withIcon="location">
          Add Localization
        </Button>
      </SectionWithTitle>
    </Container>
  );
});

Sidebar.displayName = 'Sidebar';
export { Sidebar };
