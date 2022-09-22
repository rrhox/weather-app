import React from 'react';
import styled from 'styled-components';

import { useTheme } from 'styled-components';
import { Typography } from '../../../../shared/components/atoms/Typography';
import { BaseContainerElementProps, BaseContainerElement } from '../../../../shared/styles/BaseContainerElement';

const TodayWeatherStyle = styled.div<BaseContainerElementProps>`
  ${BaseContainerElement};
  color: ${(props) => props.theme.colors.white};
`;

const Container = styled.div`
  height: 100%;
`;

const Circle = styled.div`
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.white};
`;

const ContainerItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4rem;
`;

const ContainerLineAndCircle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
`;

export type TodayWeatherProps = any;

const Co = styled.div`
  width: 40%;
  text-align: right;
`;

const BB = styled.div`
  width: 40%;
  text-align: left;
`;

const Cont = styled.div`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    width: 0.8rem;
    background: ${(props) => props.theme.gradients[500]};
  }
`;
const CCC = styled.div`
  overflow: scroll;
  height: 39rem;
`;

const Item = () => {
  return (
    <ContainerItem>
      <Co>
        <Typography variant="h4" weight="light">
          22°
        </Typography>
      </Co>
      <ContainerLineAndCircle>
        <Circle />
      </ContainerLineAndCircle>
      <BB>
        <Typography variant="subtitle2" weight="light">
          4 p.m
        </Typography>
      </BB>
    </ContainerItem>
  );
};

export const TodayWeather: React.FC<TodayWeatherProps> = () => {
  const theme = useTheme();
  return (
    <Container>
      <Typography variant="h5" weight="semibold" mt={2} mb={2} ml={2}>
        Today
      </Typography>
      <TodayWeatherStyle height="auto" background={theme.gradients[300]}>
        <CCC>
          <Cont>
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
          </Cont>
        </CCC>
      </TodayWeatherStyle>
    </Container>
  );
};
