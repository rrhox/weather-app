import React from 'react';
import styled from 'styled-components';

import { useTheme } from 'styled-components';
import { Typography } from '../../../../shared/components/atoms/Typography';
import { BaseContainerElementProps, BaseContainerElement } from '../../../../shared/styles/BaseContainerElement';

import cityBackground from '../../../../shared/assets/city-header.png';
import { Icon } from '../../../../shared/components/atoms/Icon';

export const CurrentDayWeatherStyle = styled.div<BaseContainerElementProps & { image: string }>`
  ${BaseContainerElement};
  padding: 2rem;
  color: ${(props) => props.theme.colors.white};
  position: relative;
  background-image: url(${(props) => props.image});
  background-size: cover;
`;

export const ContainerTitle = styled.div`
  margin: auto 20rem;
  display: flex;
  align-items: center;
  height: 60%;
  color: ${(props) => props.theme.colors.white};
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
  return (
    <CurrentDayWeatherStyle image={cityBackground} height="100%" background={theme.gradients[400]}>
      <Card height="28rem" width="14rem" background={theme.gradients[300]}>
        <Typography variant="h1" weight="bold">
          18°
        </Typography>
        <div>
          <Icon name="sunny" />
        </div>
      </Card>
      <ContainerTitle>
        <div>
          <Typography variant="h3" weight="semibold" mb={1}>
            Friday 18,
          </Typography>
          <Typography variant="subtitle2" weight="medium" mb={1}>
            september
          </Typography>
          <Typography variant="subtitle2" weight="light">
            2:38 PM
          </Typography>
        </div>
      </ContainerTitle>
    </CurrentDayWeatherStyle>
  );
};
