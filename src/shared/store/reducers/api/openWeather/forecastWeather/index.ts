import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { configurations } from '../../../../../configurations';
import { RawForecastWeather } from './apiRawResponseTypes';
import { ForecastWeather } from './apiResponseTypes';
import { normalizeApiResponse } from './normalizeApiResponse';

export const forecastWeather = createApi({
  reducerPath: 'forecastWeather',
  baseQuery: fetchBaseQuery({
    baseUrl: configurations.api.openWeather.baseUrl,
  }),
  endpoints: (builder) => ({
    getForecastWeatherByCity: builder.query<ForecastWeather, string>({
      query: (city: string) => `forecast?q=${city}&units=metric&appid=${configurations.api.openWeather.secretKey}`,
      transformResponse: (response: RawForecastWeather): ForecastWeather => {
        return normalizeApiResponse(response);
      },
    }),
  }),
});

export const { useGetForecastWeatherByCityQuery } = forecastWeather;
