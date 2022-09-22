import React from 'react';

export type IconType = 'location' | 'plus' | 'search' | 'cloudy' | 'partly-cloudly' | 'rain-sunny' | 'rain' | 'sunny';

export type IconProps = { name: IconType };

const Icon: React.FC<IconProps> = React.memo(({ name }) => {
  const getIcon = React.useMemo(() => {
    return require(`../../assets/${name}.png`);
  }, [name]);

  return <img src={getIcon} alt={`icon: ${name}`} />;
});

Icon.displayName = 'Icon';
export { Icon };
