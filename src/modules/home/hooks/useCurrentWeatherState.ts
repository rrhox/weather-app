import { useAppSelector } from '../../../shared/store';
import { api } from '../../../shared/store/reducers/api';

export const useCurrentWeatherState = () => {
  const mainCity = useAppSelector((state) => state.mainCity);
  const state = api.openWeather.endpoints.getCurrentWeatherByCity.useQueryState(mainCity);
  return state.data;
};
