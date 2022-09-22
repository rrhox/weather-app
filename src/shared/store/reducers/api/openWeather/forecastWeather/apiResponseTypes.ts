import { WeatherMain } from '../shared/apiResponseTypes';

export type ForecastWeather = {
  week: Array<{
    temperature: number;
    weather: WeatherMain;
    day: number;
    hour: number;
  }>;
  city: string;
};
