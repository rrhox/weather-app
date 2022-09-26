import { api } from '../../../../shared/store/reducers/api';

export const useForecastWeatherState = (city: string) => {
  const state = api.openWeather.endpoints.getForecastWeatherByCity.useQueryState(city);
  return state.data;
};
