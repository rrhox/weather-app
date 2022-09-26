import { api } from '../../../../shared/store/reducers/api';

export const useCurrentWeatherState = (city: string) => {
  const state = api.openWeather.endpoints.getCurrentWeatherByCity.useQueryState(city);
  return state.data;
};
