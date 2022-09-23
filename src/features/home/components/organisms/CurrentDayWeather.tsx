import React from 'react';
import styled from 'styled-components';

import { useTheme } from 'styled-components';

import cityBackground from '../../../../shared/assets/city-header.png';
import { Icon } from '../../../../shared/components/atoms/Icon';
import { Loading } from '../../../../shared/components/atoms/Loading';
import { Typography } from '../../../../shared/components/atoms/Typography';
import { useGetCurrentWeatherByCityQuery } from '../../../../shared/store/reducers/api/openWeather/currentWeather';
import { BaseContainerElementProps, BaseContainerElement } from '../../../../shared/styles/BaseContainerElement';
import { format } from 'date-fns';

export const CurrentDayWeatherStyle = styled.div<BaseContainerElementProps & { image: string }>`
  ${BaseContainerElement};
  padding: 2rem;
  color: ${(props) => props.theme.typography.colors[100]};
  position: relative;
  background-image: url(${(props) => props.image});
  background-size: cover;
`;

export const ContainerTitle = styled.div`
  margin: auto 20rem;
  display: flex;
  align-items: center;
  height: 60%;
  color: ${(props) => props.theme.typography.colors[200]};
`;

export const Card = styled.div<BaseContainerElementProps>`
  ${BaseContainerElement};
  position: absolute;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: -5rem;
  top: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export type CurrentDayWeatherProps = {
  title: string;
};

export const CurrentDayWeather: React.FC<CurrentDayWeatherProps> = ({ title }) => {
  const theme = useTheme();
  const {
    data: currentWeather,
    error: errorCurrentWeather,
    isLoading: isLoadingCurrentWeather,
  } = useGetCurrentWeatherByCityQuery('milan');

  if (!currentWeather || errorCurrentWeather) return <div>Error: {JSON.stringify(errorCurrentWeather)}</div>;
  if (isLoadingCurrentWeather) return <Loading />;

  return (
    <CurrentDayWeatherStyle image={cityBackground} height="100%" background={theme.gradients[400]}>
      <Card height="28rem" width="14rem" background={theme.gradients[300]}>
        <Typography variant="h1" weight="bold">
          {currentWeather?.temperature}°
        </Typography>
        <div>
          <Icon name="sunny" />
        </div>
      </Card>
      <ContainerTitle>
        <div>
          <Typography variant="h3" weight="semibold" mb={1}>
            Milan
          </Typography>

          <Typography variant="subtitle2" weight="medium" mb={1}>
            {format(currentWeather?.date, 'EEEE d, MMMM')}
          </Typography>
          <Typography variant="subtitle2" weight="light">
            {currentWeather?.weather}
          </Typography>
        </div>
      </ContainerTitle>
    </CurrentDayWeatherStyle>
  );
};
