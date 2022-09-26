import React, { memo } from 'react';
import styled from 'styled-components';

import { useTheme } from 'styled-components';
import { Typography } from '../../../../shared/components/atoms/Typography';
import { useAppSelector } from '../../../../shared/store';

import { BaseContainerElementProps, BaseContainerElement } from '../../../../shared/styles/BaseContainerElement';
import { useCurrentWeatherState } from '../../hooks/useCurrentWeatherState';
import { useForecastWeatherState } from '../../hooks/useForecastWeatherState';

const Container = styled.div`
  height: 100%;
`;

const Timeline = styled.div<BaseContainerElementProps>`
  ${BaseContainerElement};
  color: ${(props) => props.theme.typography.colors[100]};
`;

const Circle = styled.div<{ isCurrentTime?: boolean }>`
  height: ${(props) => (props.isCurrentTime ? 3 : 2)}rem;
  width: ${(props) => (props.isCurrentTime ? 3 : 2)}rem;
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

const Temperature = styled.div`
  width: 40%;
  text-align: right;
`;

const Hour = styled.div`
  width: 40%;
  text-align: left;
`;

const Line = styled.div`
  position: relative;
  margin-top: 5rem;

  &::before {
    content: '';
    position: absolute;
    top: 3.5rem;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    width: 0.8rem;
    background: ${(props) => props.theme.gradients[500]};
  }
`;

const ScrollContainer = styled.div`
  overflow: scroll;
  height: 39rem;
`;

type TimelineItemProps = {
  temperature: number;
  hour?: string;
};

const TimelineItem: React.FC<TimelineItemProps> = memo(({ temperature, hour }) => {
  return (
    <ContainerItem>
      <Temperature>
        <Typography variant={!hour ? 'h2' : 'h4'} weight={!hour ? 'bold' : 'light'}>
          {temperature}°
        </Typography>
      </Temperature>
      <ContainerLineAndCircle>
        <Circle isCurrentTime={!hour} />
      </ContainerLineAndCircle>
      {hour && (
        <Hour>
          <Typography variant="subtitle2" weight="light">
            {hour}
          </Typography>
        </Hour>
      )}
    </ContainerItem>
  );
});

const TodayTimeline: React.FC = memo(() => {
  const theme = useTheme();
  const forecastWeather = useForecastWeatherState();
  const currentWeather = useCurrentWeatherState();
  if (!forecastWeather || !currentWeather) return null;

  return (
    <Container>
      <Typography variant="h5" weight="semibold" mt={2} mb={2} ml={2}>
        Today
      </Typography>
      <Timeline height="auto" background={theme.gradients[300]}>
        <ScrollContainer>
          <Line>
            <div style={{ textAlign: 'center' }}>
              <Typography variant="body1" weight="bold" mt={2.5}>
                now
              </Typography>
            </div>
            <TimelineItem temperature={currentWeather.temperature} />

            {forecastWeather.timeline.map((w, i: number) => (
              <TimelineItem key={i} temperature={w.temperature} hour={w.hour} />
            ))}
          </Line>
        </ScrollContainer>
      </Timeline>
    </Container>
  );
});

TimelineItem.displayName = 'TimelineItem';
TodayTimeline.displayName = 'TodayTimeline';
export { TodayTimeline };
