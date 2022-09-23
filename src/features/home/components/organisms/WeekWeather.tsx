import React, { memo } from 'react';
import styled from 'styled-components';
import { Loading } from '../../../../shared/components/atoms/Loading';

import { Slider } from '../../../../shared/components/molecules/Slider';

import { Tabs } from '../../../../shared/components/molecules/Tabs';

import { MinimalDayWeatherCard } from '../molecules/MinimalWeatherCard';
import { MonthWeather } from './MonthWeather';
import { format } from 'date-fns';
import { useGetForecastWeatherByCityQuery } from '../../../../shared/store/reducers/api/openWeather';

const CardContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  /* justify-content: space-between;*/
  gap: 3rem;
`;

const WeekWeather: React.FC = memo(() => {
  const {
    data: forecastWeather,
    error: errorForecastWeather,
    isLoading: isLoadingForecastWeather,
  } = useGetForecastWeatherByCityQuery('milan');

  if (!forecastWeather || errorForecastWeather) return <div>Error: {JSON.stringify(errorForecastWeather)}</div>;
  if (isLoadingForecastWeather) return <Loading />;
  return (
    <Tabs
      data={[
        {
          tabLabel: 'This week',
          content: (
            <Slider>
              {forecastWeather.week.map((w, i: number) => {
                return (
                  <CardContainer key={i}>
                    {w.map((e, i: number) => (
                      <MinimalDayWeatherCard key={i} temperature={e.temperature} day={format(e.day, 'eee')} />
                    ))}
                  </CardContainer>
                );
              })}
            </Slider>
          ),
        },
        {
          tabLabel: 'This month',
          content: (
            <Slider>
              <MonthWeather />
              <MonthWeather />
            </Slider>
          ),
        },
      ]}
    />
  );
});

WeekWeather.displayName = 'WeekWeather';
export { WeekWeather };
