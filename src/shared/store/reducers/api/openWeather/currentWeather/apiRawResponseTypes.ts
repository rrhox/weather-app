import { RawWeather, RawWind, RawClouds, RawCoord } from '../shared/apiRawResponseTypes';

export interface RawMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

export interface RawSys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface RawCurrentWeather {
  coord: RawCoord;
  weather: RawWeather[];
  base: string;
  main: RawMain;
  visibility: number;
  wind: RawWind;
  clouds: RawClouds;
  dt: number;
  sys: RawSys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}
