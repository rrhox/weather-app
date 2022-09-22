import { RawCurrentWeather } from './apiRawResponseTypes';
import { CurrentWeather } from './apiResponseTypes';
import fromUnixTime from 'date-fns/fromUnixTime';

export const normalizeApiResponse = (data: RawCurrentWeather): CurrentWeather => ({
  temperature: data.main.temp,
  weather: data.weather[0].main,
  date: fromUnixTime(data.dt),
  city: data.name,
});
