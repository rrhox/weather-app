import React, { memo } from 'react';
import styled from 'styled-components';
import { Icon } from '../../../../../shared/components/atoms/Icon';
import { Loading } from '../../../../../shared/components/atoms/Loading';

import { Typography } from '../../../../../shared/components/atoms/Typography';
import { Slider } from '../../../../../shared/components/molecules/Slider';
import { useGetCurrentWeatherByCityQuery } from '../../../../../shared/store/reducers/api/openWeather';
import { format } from 'date-fns';

const Container = styled.div`
  background-color: ${(props) => props.theme.opacity[100]};
  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: ${(props) => props.theme.shadows[100]};
  width: 100%;
  height: 100%;
  display: flex;
`;

const LeftSide = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const Info = styled.div`
  width: 60%;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MonthWeather: React.FC = memo(() => {
  const {
    data: currentWeather,
    error: errorCurrentWeather,
    isLoading: isLoadingCurrentWeather,
  } = useGetCurrentWeatherByCityQuery('milan');

  if (!currentWeather || errorCurrentWeather) return <div>Error: {JSON.stringify(errorCurrentWeather)}</div>;
  if (isLoadingCurrentWeather) return <Loading />;

  return (
    <Slider>
      <Container>
        <LeftSide>
          <Typography variant="subtitle1" weight="semibold">
            {format(currentWeather?.date, 'EEEE d, MMM')}
          </Typography>
          <Icon name="wind" />
        </LeftSide>
        <Info>
          <Typography variant="h3" weight="semibold">
            {currentWeather?.temperature}°
          </Typography>
          <Typography variant="body1" weight="light" mb={1.4} mt={1.4}>
            {currentWeather?.weatherDescription}
          </Typography>
          <Typography variant="body1" weight="light" mb={3}>
            The high will be {currentWeather?.temperatureMax}°C, The low will be {currentWeather?.temperatureMin}°C
          </Typography>
          <Typography variant="body1" weight="light">
            Humidity: {currentWeather?.humidity}%
          </Typography>
          <Typography variant="body1" weight="light">
            UV: 3
          </Typography>
          <Typography variant="body1" weight="light">
            Dew poin: 3°C
          </Typography>
        </Info>
      </Container>
      <Container></Container>
    </Slider>
  );
});

MonthWeather.displayName = 'MonthWeather';
export { MonthWeather };
