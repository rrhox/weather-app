import { useAppSelector } from '../../../shared/store';
import { api } from '../../../shared/store/reducers/api';

export const useForecastWeatherState = () => {
  const mainCity = useAppSelector((state) => state.mainCity);
  const state = api.openWeather.endpoints.getForecastWeatherByCity.useQueryState(mainCity);
  return state.data;
};
