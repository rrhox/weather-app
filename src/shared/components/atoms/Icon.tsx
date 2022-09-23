import React, { FC, memo, useMemo } from 'react';
import { RawWeatherMain } from '../../store/reducers/api/openWeather/shared/apiRawResponseTypes';

export type IconType =
  | 'wind'
  | 'location'
  | 'plus'
  | 'search'
  | 'clouds'
  | 'partly-cloudly'
  | 'rain-sunny'
  | 'rain'
  | 'clear'
  | RawWeatherMain;

type IconProps = { name: IconType };

const Icon: FC<IconProps> = memo(({ name }) => {
  const getIcon = useMemo(() => {
    return require(`../../assets/${name.toLowerCase()}.png`);
  }, [name]);

  return <img src={getIcon} alt={`icon: ${name}`} />;
});

Icon.displayName = 'Icon';
export { Icon };
