import { RawCurrentWeather } from './apiRawResponseTypes';
import { CurrentWeather } from './apiResponseTypes';
import fromUnixTime from 'date-fns/fromUnixTime';
import { convertFloatToInterger } from '../../../../../utils';

export const normalizeCurrentWeatherApiResponse = (data: RawCurrentWeather): CurrentWeather => ({
  temperature: convertFloatToInterger(data.main.temp),
  weather: data.weather[0].main,
  date: fromUnixTime(data.dt),
  city: data.name,
});
