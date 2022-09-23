import React, { memo } from 'react';
import styled from 'styled-components';

import { Typography } from '../../../../shared/components/atoms/Typography';
import { Slider } from '../../../../shared/components/molecules/Slider';

import { Tabs } from '../../../../shared/components/molecules/Tabs';
import { MinimalDayWeatherCard } from '../molecules/MinimalWeatherCard';

const CardContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
`;

const WeekWeather: React.FC = memo(() => {
  return (
    <Tabs
      data={[
        {
          tabLabel: 'This week',
          content: (
            <Slider>
              <CardContainer>
                <MinimalDayWeatherCard temperature={18} day="Lun" />
                <MinimalDayWeatherCard temperature={20} day="Mar" />
                <MinimalDayWeatherCard temperature={22} day="Mer" />
              </CardContainer>
              <CardContainer>
                <MinimalDayWeatherCard temperature={24} day="Gio" />
                <MinimalDayWeatherCard temperature={19} day="Ven" />
                <MinimalDayWeatherCard temperature={17} day="Sab" />
              </CardContainer>
              <CardContainer>
                <MinimalDayWeatherCard temperature={21} day="Dom" />
              </CardContainer>
            </Slider>
          ),
        },
        {
          tabLabel: 'This month',
          content: (
            <Typography variant="h5" weight="semibold">
              BBBB
            </Typography>
          ),
        },
      ]}
    />
  );
});

WeekWeather.displayName = 'WeekWeather';
export { WeekWeather };
