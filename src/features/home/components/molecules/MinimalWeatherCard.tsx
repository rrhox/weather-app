import React, { FC, memo } from 'react';
import styled from 'styled-components';
import { Icon, IconType } from '../../../../shared/components/atoms/Icon';
import { Typography } from '../../../../shared/components/atoms/Typography';

const Container = styled.div`
  background-color: ${(props) => props.theme.opacity[100]};
  height: 100%;
  width: 30%;
  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: ${(props) => props.theme.shadows[100]};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  color: ${(props) => props.theme.typography.colors[100]};
`;

type MinimalDayWeatherCardProps = { temperature: number; weather: IconType; day?: string };
const MinimalDayWeatherCard: FC<MinimalDayWeatherCardProps> = memo(({ temperature, weather, day }) => {
  return (
    <Container>
      {day && (
        <Typography variant="subtitle1" weight="semibold">
          {day}
        </Typography>
      )}
      <Typography variant="h2" weight="semibold">
        {temperature}°
      </Typography>
      <div>
        <Icon name={weather} />
      </div>
    </Container>
  );
});

MinimalDayWeatherCard.displayName = 'MinimalDayWeatherCard';
export { MinimalDayWeatherCard };
