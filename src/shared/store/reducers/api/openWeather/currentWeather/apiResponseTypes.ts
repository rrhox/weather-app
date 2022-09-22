import { WeatherMain } from '../shared/apiResponseTypes';

export type CurrentWeather = {
  temperature: number;
  weather: WeatherMain;
  date: Date;
  city: string;
};
