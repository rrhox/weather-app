import { RawWeatherMain } from './apiRawResponseTypes';

export const getWeatherFallback = (weather: RawWeatherMain) => {
  return ['Clear', 'Clouds', 'Rain'].includes(weather) ? weather : 'Clear';
};
