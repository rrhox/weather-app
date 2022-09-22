import { RawForecastWeather } from './apiRawResponseTypes';
import { ForecastWeather } from './apiResponseTypes';

export const normalizeApiResponse = (data: RawForecastWeather): ForecastWeather => ({
  city: data.city.name,
  week: data.list.map((el) => ({
    temperature: el.main.temp,
    weather: el.weather[0].main,
    day: new Date(el.dt_txt).getDay(),
    hour: new Date(el.dt_txt).getHours(),
  })),
});
