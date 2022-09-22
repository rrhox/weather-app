import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { configurations } from '../../../../../configurations';
import { RawCurrentWeather } from './apiRawResponseTypes';
import { CurrentWeather } from './apiResponseTypes';
import { normalizeApiResponse } from './normalizeApiResponse';

export const currentWeather = createApi({
  reducerPath: 'currentWeather',
  baseQuery: fetchBaseQuery({
    baseUrl: configurations.api.openWeather.baseUrl,
  }),
  endpoints: (builder) => ({
    getCurrentWeatherByCity: builder.query<CurrentWeather, string>({
      query: (city: string) => `weather?q=${city}&units=metric&appid=${configurations.api.openWeather.secretKey}`,
      transformResponse: (response: RawCurrentWeather): CurrentWeather => {
        return normalizeApiResponse(response);
      },
    }),
  }),
});

export const { useGetCurrentWeatherByCityQuery } = currentWeather;
