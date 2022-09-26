import { RawForecastWeather, RawList } from './apiRawResponseTypes';
import { ForecastWeather } from './apiResponseTypes';
import { format } from 'date-fns';
import { convertFloatToInterger } from '../../../../../utils';
import _ from 'lodash';
import { getWeatherFallback } from '../shared/getWeatherFallback';

export const normalizeForecastWeatherApiResponse = (data: RawForecastWeather): ForecastWeather => {
  const normalizeListElement = (listElement: RawList) => ({
    temperature: convertFloatToInterger(listElement.main.temp),
    weather: getWeatherFallback(listElement.weather?.[0].main),
    day: format(new Date(listElement.dt_txt), 'eee'),
    hour: format(new Date(listElement.dt_txt), 'h aaa'),
  });

  const timeline = data.list
    .filter((el) => {
      const dd = new Date(el.dt_txt).getDay();
      const dateNow = new Date().getDay();
      return dd === dateNow;
    })
    .map(normalizeListElement);

  const week = _.chunk(
    _.chunk(data.list.map(normalizeListElement), 8).map((el) => el[0]),
    3,
  );

  return {
    timeline,
    week,
    city: data.city.name,
  };
};
