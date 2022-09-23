import React, { FC, memo, useMemo } from 'react';

export type IconType =
  | 'wind'
  | 'location'
  | 'plus'
  | 'search'
  | 'cloudy'
  | 'partly-cloudly'
  | 'rain-sunny'
  | 'rain'
  | 'sunny';

type IconProps = { name: IconType };

const Icon: FC<IconProps> = memo(({ name }) => {
  const getIcon = useMemo(() => {
    return require(`../../assets/${name}.png`);
  }, [name]);

  return <img src={getIcon} alt={`icon: ${name}`} />;
});

Icon.displayName = 'Icon';
export { Icon };
