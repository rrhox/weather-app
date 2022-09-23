import React from 'react';
import styled from 'styled-components';
import { BaseContainerElement, BaseContainerElementProps } from '../../../../shared/styles/BaseContainerElement';
import { Typography } from '../../../../shared/components/atoms/Typography';
import { useTheme } from 'styled-components';
import { Icon } from '../../../../shared/components/atoms/Icon';

export const Container = styled.div<BaseContainerElementProps>`
  ${BaseContainerElement};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  color: ${(props) => props.theme.typography.colors[100]};
  margin-bottom: 3rem;
`;

export type WeatherCardProps = {
  city: string;
  day: string;
  month: string;
  hour: string;
  temperature: number;
  index: number;
};

export const WeatherCard: React.FC<WeatherCardProps> = ({ city, day, month, hour, temperature, index }) => {
  const theme = useTheme();
  return (
    <Container height="14rem" background={index % 2 === 0 ? theme.gradients[100] : theme.gradients[200]}>
      <div>
        <Typography variant="h6" weight="semibold" mb={1}>
          {city}
        </Typography>
        <Typography variant="body1" weight="medium">
          {day}
        </Typography>
        <Typography variant="body1" weight="medium">
          {month}
        </Typography>
        <Typography variant="body2" weight="light" mt={1.2}>
          {hour}
        </Typography>
      </div>
      <div>
        <Icon name="sunny" />
      </div>
      <div>
        <Typography variant="h1" weight="bold">
          {temperature}°
        </Typography>
      </div>
    </Container>
  );
};
