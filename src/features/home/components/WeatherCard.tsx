import React from 'react';
import styled from 'styled-components';
import { Card } from '../../../shared/components/atoms/Card';
import { IconWeather } from '../../../shared/components/atoms/IconWeather';
import { Typography } from '../../../shared/components/atoms/Typography';
import { useTheme } from 'styled-components';

export const WeatherCardStyle = styled(Card)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export type WeatherCardProps = {
  title: string;
};

export const WeatherCard: React.FC<WeatherCardProps> = ({ title }) => {
  const theme = useTheme();
  return (
    <WeatherCardStyle height="140px" width="374px" background={theme.gradients[100]}>
      <div>
        <Typography variant="h6" weight="semibold">
          {title}
        </Typography>
        <Typography variant="body1" weight="medium">
          Friday 18,
        </Typography>
        <Typography variant="body1" weight="medium">
          september
        </Typography>
        <Typography variant="body2" weight="light">
          2:38 PM
        </Typography>
      </div>
      <div>
        <IconWeather type="sunny" />
      </div>
      <div>
        <Typography variant="h1" weight="bold">
          {'18°'}
        </Typography>
      </div>
    </WeatherCardStyle>
  );
};
