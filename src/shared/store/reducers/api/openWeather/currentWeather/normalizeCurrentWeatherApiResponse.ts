import { RawCurrentWeather } from './apiRawResponseTypes';
import { CurrentWeather } from './apiResponseTypes';
import fromUnixTime from 'date-fns/fromUnixTime';
import { convertFloatToInterger } from '../../../../../utils';

export const normalizeCurrentWeatherApiResponse = (data: RawCurrentWeather): CurrentWeather => ({
  temperature: convertFloatToInterger(data.main.temp),
  weather: data.weather[0].main,
  date: fromUnixTime(data.dt),
  city: data.name,
  temperatureMin: convertFloatToInterger(data.main.temp_min),
  temperatureMax: convertFloatToInterger(data.main.temp_max),
  humidity: convertFloatToInterger(data.main.humidity),
  weatherDescription: data.weather?.[0].description,
});
