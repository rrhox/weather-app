import React, { memo } from 'react';

import { Tabs } from '../../../../../shared/components/molecules/Tabs';
import { MonthWeather } from './MonthWeather';

import { WeekWeather } from './WeekWeather';

const TabsWeather: React.FC = memo(() => {
  return (
    <Tabs
      data={[
        {
          tabLabel: 'This week',
          content: <WeekWeather />,
        },
        {
          tabLabel: 'This month',
          content: <MonthWeather />,
        },
      ]}
    />
  );
});

TabsWeather.displayName = 'TabsWeather';
export { TabsWeather };
