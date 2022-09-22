import React from 'react';
import styled from 'styled-components';

import { useTheme } from 'styled-components';
import { Typography } from '../../../../shared/components/atoms/Typography';
import { BaseContainerElementProps, BaseContainerElement } from '../../../../shared/styles/BaseContainerElement';

export const WeekWeatherStyle = styled.div<BaseContainerElementProps>`
  ${BaseContainerElement};
`;

export type WeekWeatherProps = {
  title: string;
};

export const WeekWeather: React.FC<WeekWeatherProps> = ({ title }) => {
  const theme = useTheme();
  return (
    <WeekWeatherStyle height="100%" width="70%" background={theme.gradients[300]}>
      <Typography variant="h6" weight="semibold">
        {title}
      </Typography>
    </WeekWeatherStyle>
  );
};
