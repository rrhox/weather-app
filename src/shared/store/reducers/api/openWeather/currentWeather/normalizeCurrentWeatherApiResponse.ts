import { RawCurrentWeather } from './apiRawResponseTypes';
import { CurrentWeather } from './apiResponseTypes';
import { convertFloatToInterger } from '../../../../../utils';
import fromUnixTime from 'date-fns/fromUnixTime';
import { getWeatherFallback } from '../shared/getWeatherFallback';

export const normalizeCurrentWeatherApiResponse = (data: RawCurrentWeather): CurrentWeather => ({
  temperature: convertFloatToInterger(data.main.temp),
  weather: getWeatherFallback(data.weather?.[0].main),
  date: fromUnixTime(data.dt).toISOString(),
  city: data.name,
  temperatureMin: convertFloatToInterger(data.main.temp_min),
  temperatureMax: convertFloatToInterger(data.main.temp_max),
  humidity: convertFloatToInterger(data.main.humidity),
  weatherDescription: data.weather?.[0].description,
});
