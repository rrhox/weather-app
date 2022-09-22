import React from 'react';
import styled from 'styled-components';

import { useTheme } from 'styled-components';
import { Typography } from '../../../../shared/components/atoms/Typography';
import { BaseContainerElementProps, BaseContainerElement } from '../../../../shared/styles/BaseContainerElement';

const TodayWeatherStyle = styled.div<BaseContainerElementProps>`
  ${BaseContainerElement};
`;

const Container = styled.div`
  height: 100%;
`;

export type TodayWeatherProps = any;

export const TodayWeather: React.FC<TodayWeatherProps> = () => {
  const theme = useTheme();
  return (
    <Container>
      <Typography variant="h5" weight="semibold" mt={2} mb={2}>
        Today
      </Typography>
      <TodayWeatherStyle height="calc(100% - 7.2rem)" background={theme.gradients[300]}></TodayWeatherStyle>
    </Container>
  );
};
