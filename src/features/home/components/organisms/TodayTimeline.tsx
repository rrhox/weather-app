import React, { memo } from 'react';
import styled from 'styled-components';

import { useTheme } from 'styled-components';
import { Typography } from '../../../../shared/components/atoms/Typography';
import { BaseContainerElementProps, BaseContainerElement } from '../../../../shared/styles/BaseContainerElement';

const Container = styled.div`
  height: 100%;
`;

const Timeline = styled.div<BaseContainerElementProps>`
  ${BaseContainerElement};
  color: ${(props) => props.theme.colors.white};
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

const ScrollContainer = styled.div`
  overflow: scroll;
  height: 39rem;
`;

type TimelineItemProps = {
  temperature: number;
  hour: string;
};

const TimelineItem: React.FC<TimelineItemProps> = memo(({ temperature, hour }) => {
  return (
    <ContainerItem>
      <Temperature>
        <Typography variant="h4" weight="light">
          {temperature}°
        </Typography>
      </Temperature>
      <ContainerLineAndCircle>
        <Circle />
      </ContainerLineAndCircle>
      <Hour>
        <Typography variant="subtitle2" weight="light">
          {hour}
        </Typography>
      </Hour>
    </ContainerItem>
  );
});

const TodayTimeline: React.FC = memo(() => {
  const theme = useTheme();
  return (
    <Container>
      <Typography variant="h5" weight="semibold" mt={2} mb={2} ml={2}>
        Today
      </Typography>
      <Timeline height="auto" background={theme.gradients[300]}>
        <ScrollContainer>
          <Line>
            <TimelineItem temperature={22} hour="4 p.m" />
            <TimelineItem temperature={22} hour="5 p.m" />
            <TimelineItem temperature={22} hour="6 p.m" />
            <TimelineItem temperature={22} hour="7 p.m" />
            <TimelineItem temperature={22} hour="8 p.m" />
            <TimelineItem temperature={22} hour="9 p.m" />
            <TimelineItem temperature={22} hour="10 p.m" />
            <TimelineItem temperature={22} hour="11 p.m" />
            <TimelineItem temperature={22} hour="12 p.m" />
          </Line>
        </ScrollContainer>
      </Timeline>
    </Container>
  );
});

TimelineItem.displayName = 'TimelineItem';
TodayTimeline.displayName = 'TodayTimeline';
export { TodayTimeline };
