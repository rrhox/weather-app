import React from 'react';
import styled from 'styled-components';

import { useTheme } from 'styled-components';
import { Typography } from '../../../../shared/components/atoms/Typography';
import { BaseContainerElementProps, BaseContainerElement } from '../../../../shared/styles/BaseContainerElement';

export const CurrentDayWeatherStyle = styled.div<BaseContainerElementProps>`
  ${BaseContainerElement};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  color: ${(props) => props.theme.colors.white};
`;

export type CurrentDayWeatherProps = {
  title: string;
};

export const CurrentDayWeather: React.FC<CurrentDayWeatherProps> = ({ title }) => {
  const theme = useTheme();
  return (
    <CurrentDayWeatherStyle height="100%" background={theme.gradients[400]}>
      <Typography variant="h6" weight="semibold">
        {title}
      </Typography>
    </CurrentDayWeatherStyle>
  );
};
