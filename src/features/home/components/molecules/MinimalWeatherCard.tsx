import React, { FC, memo } from 'react';
import styled from 'styled-components';
import { Icon } from '../../../../shared/components/atoms/Icon';
import { Typography } from '../../../../shared/components/atoms/Typography';

const Container = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
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

const MinimalDayWeatherCard: FC<{ temperature: number; day?: string }> = memo(({ temperature, day }) => {
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
        <Icon name="sunny" />
      </div>
    </Container>
  );
});

MinimalDayWeatherCard.displayName = 'MinimalDayWeatherCard';
export { MinimalDayWeatherCard };
