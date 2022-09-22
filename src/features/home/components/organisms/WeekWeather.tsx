import React from 'react';
import styled from 'styled-components';

import { useTheme } from 'styled-components';

import { Tabs } from '../../../../shared/components/molecules/Tabs';

export const WeekWeatherStyle = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`;

export type WeekWeatherProps = {
  title: string;
};

export const WeekWeather: React.FC<WeekWeatherProps> = ({ title }) => {
  const theme = useTheme();
  const [toggle, setToggle] = React.useState<number>(1);

  const toggleTab = (index: number) => {
    setToggle(index);
  };

  return <Tabs title="a" />;
};
