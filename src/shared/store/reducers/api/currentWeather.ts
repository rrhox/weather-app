// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { configurations } from "../../../configurations";

// Define a service using a base URL and expected endpoints
export const currentWeather = createApi({
  reducerPath: "currentWeather",
  baseQuery: fetchBaseQuery({
    baseUrl: configurations.api.openWeather.baseUrl,
  }),
  endpoints: (builder) => ({
    getCurrentWeatherByCity: builder.query({
      query: (city: string) =>
        `weather?q=${city}&appid=${configurations.api.openWeather.secretKey}`,
    }),
  }),
});

export const { useGetCurrentWeatherByCityQuery } = currentWeather;
