import { WeatherMain } from '../shared/apiResponseTypes';

export type CurrentWeather = {
  temperature: number;
  temperatureMin: number;
  temperatureMax: number;
  humidity: number;
  weather: WeatherMain;
  weatherDescription: string;
  date: string;
  city: string;
};
