import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { configurations } from '../../../../configurations';
import { RawCurrentWeather } from './currentWeather/apiRawResponseTypes';
import { CurrentWeather } from './currentWeather/apiResponseTypes';
import { normalizeCurrentWeatherApiResponse } from './currentWeather/normalizeCurrentWeatherApiResponse';
import { RawForecastWeather } from './forecastWeather/apiRawResponseTypes';
import { ForecastWeather } from './forecastWeather/apiResponseTypes';
import { normalizeForecastWeatherApiResponse } from './forecastWeather/normalizeForecastWeatherApiResponse';

export const openWeather = createApi({
  reducerPath: 'openWeather',
  baseQuery: fetchBaseQuery({
    baseUrl: configurations.api.openWeather.baseUrl,
  }),
  endpoints: (builder) => ({
    getCurrentWeatherByCity: builder.query<CurrentWeather, string>({
      query: (city: string) => `weather?q=${city}&units=metric&appid=${configurations.api.openWeather.secretKey}`,
      transformResponse: (response: RawCurrentWeather): CurrentWeather => {
        return normalizeCurrentWeatherApiResponse(response);
      },
    }),
    getForecastWeatherByCity: builder.query<ForecastWeather, string>({
      query: (city: string) => `forecast?q=${city}&units=metric&appid=${configurations.api.openWeather.secretKey}`,
      transformResponse: (response: RawForecastWeather): ForecastWeather => {
        return normalizeForecastWeatherApiResponse(response);
      },
    }),
  }),
});

export const { useGetCurrentWeatherByCityQuery, useGetForecastWeatherByCityQuery } = openWeather;
