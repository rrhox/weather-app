import { RawWeather, RawWind, RawClouds, RawCoord } from '../shared/apiRawResponseTypes';

export interface RawForecastWeather {
  cod: string;
  message: number;
  cnt: number;
  list: RawList[];
  city: RawCity;
}

export interface RawCity {
  id: number;
  name: string;
  coord: RawCoord;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}

export interface RawList {
  dt: number;
  main: RawMainClass;
  weather: RawWeather[];
  clouds: RawClouds;
  wind: RawWind;
  visibility: number;
  pop: number;
  sys: RawSys;
  dt_txt: string;
  rain?: RawRain;
}

export interface RawMainClass {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

export interface RawRain {
  '3h': number;
}

export interface RawSys {
  pod: RawPod;
}

export type RawPod = 'd' | 'n';
