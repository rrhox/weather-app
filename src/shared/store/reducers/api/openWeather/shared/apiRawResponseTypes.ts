export type RawWeatherMain =
  | 'Clear'
  | 'Clouds'
  | 'Rain'
  | 'Atmosphere'
  | 'Snow'
  | 'Rain'
  | 'Drizzle'
  | 'Thunderstorm'
  | 'Mist'
  | 'Smoke'
  | 'Haze'
  | 'Dust'
  | 'Fog'
  | 'Sand'
  | 'Ash'
  | 'Squall'
  | 'Tornado';

export interface RawWeather {
  id: number;
  main: RawWeatherMain;
  description: string;
  icon: string;
}

export interface RawWind {
  speed: number;
  deg: number;
  gust: number;
}

export interface RawClouds {
  all: number;
}

export interface RawCoord {
  lon: number;
  lat: number;
}
