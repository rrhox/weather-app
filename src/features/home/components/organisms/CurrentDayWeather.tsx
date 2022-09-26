import React from 'react';
import styled from 'styled-components';
import { useTheme } from 'styled-components';
import cityBackground from '../../../../shared/assets/city-header.png';
import { Icon } from '../../../../shared/components/atoms/Icon';
import { Typography } from '../../../../shared/components/atoms/Typography';
import { BaseContainerElementProps, BaseContainerElement } from '../../../../shared/styles/BaseContainerElement';
import { format } from 'date-fns';
import { useCurrentWeatherState } from '../../hooks/api/useCurrentWeatherState';

export const CurrentDayWeatherStyle = styled.div<BaseContainerElementProps & { image: string }>`
  ${BaseContainerElement};
  padding: 2rem;
  color: ${(props) => props.theme.typography.colors[100]};
  position: relative;
  background-image: url(${(props) => props.image});
  background-size: cover;
`;

export const ContainerTitle = styled.div`
  margin: auto 13rem;
  display: flex;
  align-items: center;
  height: 60%;
  color: ${(props) => props.theme.typography.colors[200]};

  @media screen and (min-width: ${(props) => props.theme.breakpoint.md}px) {
    margin: auto 20rem;
  }
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

export const CurrentDayWeather: React.FC = () => {
  const theme = useTheme();

  const currentWeather = useCurrentWeatherState('milan');
  if (!currentWeather) return null;

  return (
    <CurrentDayWeatherStyle image={cityBackground} height="100%" background={theme.gradients[400]}>
      <Card height="28rem" width="14rem" background={theme.gradients[300]}>
        <Typography variant="h1" weight="bold">
          {currentWeather?.temperature}°
        </Typography>
        <div>
          <Icon name={currentWeather?.weather} />
        </div>
      </Card>
      <ContainerTitle>
        <div>
          <Typography variant="h3" weight="semibold" mb={1}>
            {currentWeather?.city}
          </Typography>

          <Typography variant="subtitle2" weight="medium" mb={1}>
            {format(new Date(currentWeather?.date), 'EEEE d, MMMM')}
          </Typography>
          <Typography variant="subtitle2" weight="light">
            {currentWeather?.weather}
          </Typography>
        </div>
      </ContainerTitle>
    </CurrentDayWeatherStyle>
  );
};
