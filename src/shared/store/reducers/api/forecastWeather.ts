import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { configurations } from '../../../configurations';

export const forecastWeather = createApi({
  reducerPath: 'forecastWeather',
  baseQuery: fetchBaseQuery({
    baseUrl: configurations.api.openWeather.baseUrl,
  }),
  endpoints: (builder) => ({
    getForecastWeatherByCity: builder.query({
      query: (city: string) => `forecast?q=${city}&appid=${configurations.api.openWeather.secretKey}`,
    }),
  }),
});

export const { useGetForecastWeatherByCityQuery } = forecastWeather;
