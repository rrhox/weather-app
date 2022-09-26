import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query/fetchBaseQuery';
import { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../../shared/store';

import {
  useGetCurrentWeatherByCityQuery,
  useGetForecastWeatherByCityQuery,
} from '../../../shared/store/reducers/api/openWeather';
import { resetSearchCity } from '../../../shared/store/reducers/mainCitySlice';

export const useGetWeatherInfoAboutCity = () => {
  const [isErrors, setIsError] = useState<boolean>(false);
  const mainCity = useAppSelector((state) => state.mainCity);
  const dispatch = useAppDispatch();

  const {
    data: currentWeather,
    error: errorCurrentWeather,
    isLoading: isLoadingCurrentWeather,
  } = useGetCurrentWeatherByCityQuery(mainCity);

  const {
    data: forecastWeather,
    error: errorForecastWeather,
    isLoading: isLoadingForecastWeather,
  } = useGetForecastWeatherByCityQuery(mainCity);

  useEffect(() => {
    if (errorCurrentWeather || errorForecastWeather) {
      const currentWeatherNotFound = (errorCurrentWeather as FetchBaseQueryError)?.status === 404;
      const forecastWeatherNotFound = (errorForecastWeather as FetchBaseQueryError)?.status === 404;
      if (currentWeatherNotFound || forecastWeatherNotFound) {
        dispatch(resetSearchCity());
        setIsError(false);
      } else {
        setIsError(true);
      }
    }
  }, [mainCity, errorCurrentWeather, errorForecastWeather]);

  return {
    data: { currentWeather, forecastWeather },
    isLoading: isLoadingForecastWeather || isLoadingCurrentWeather,
    isErrors: isErrors,
  };
};
