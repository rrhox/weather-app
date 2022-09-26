import React, { memo } from 'react';
import styled from 'styled-components';

import { Slider } from '../../../../../shared/components/molecules/Slider';

import { MinimalDayWeatherCard } from '../../molecules/MinimalWeatherCard';

import { useForecastWeatherState } from '../../../hooks/useForecastWeatherState';

const CardContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  /* justify-content: space-between;*/
  gap: 3rem;
`;

const WeekWeather: React.FC = memo(() => {
  const forecastWeather = useForecastWeatherState();
  if (!forecastWeather) return null;
  return (
    <Slider>
      {forecastWeather.week.map((w, i: number) => {
        return (
          <CardContainer key={i}>
            {w.map((e, i: number) => (
              <MinimalDayWeatherCard key={i} temperature={e.temperature} day={e.day} weather={e.weather} />
            ))}
          </CardContainer>
        );
      })}
    </Slider>
  );
});

WeekWeather.displayName = 'WeekWeather';
export { WeekWeather };
