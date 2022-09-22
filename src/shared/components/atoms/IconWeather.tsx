import React from 'react';
import styled from 'styled-components';

export const IconWeatherStyle = styled.div`
  height: 100px;
  width: 100px;
`;

export type IconWeatherProps = {
  type: 'cloudy' | 'partly-cloudly' | 'rain-sunny' | 'rain' | 'sunny';
};

const IconWeather: React.FC<IconWeatherProps> = React.memo(({ type }) => {
  const getIcon = React.useMemo(() => {
    return require(`../../assets/${type}.png`);
  }, [type]);

  return <img src={getIcon} alt={`icon: ${type}`} />;
});

IconWeather.displayName = 'IconWeather';
export { IconWeather };
