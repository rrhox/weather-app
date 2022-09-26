import { WeatherMain } from '../shared/apiResponseTypes';

type WeatherInfo = {
  temperature: number;
  weather: WeatherMain;
  day: string;
  hour: string;
};

export type ForecastWeather = {
  timeline: Array<WeatherInfo>;
  week: Array<Array<WeatherInfo>>;
  city: string;
};
