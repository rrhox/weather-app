import { RawForecastWeather } from './apiRawResponseTypes';
import { ForecastWeather } from './apiResponseTypes';
import { format } from 'date-fns';
import { convertFloatToInterger } from '../../../../../utils';
import _ from 'lodash';

export const normalizeApiResponse = (data: RawForecastWeather): ForecastWeather => {
  const timeline = data.list.map((el) => ({
    temperature: convertFloatToInterger(el.main.temp),
    weather: el.weather[0].main,
    day: new Date(el.dt_txt),
    hour: format(new Date(el.dt_txt), 'h aaa'),
  }));

  const week = _.chunk(
    _.chunk(timeline, 8).map((el) => el[0]),
    3,
  );

  return {
    timeline,
    week,
    city: data.city.name,
  };
};
