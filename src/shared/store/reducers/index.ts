import { combineReducers } from "@reduxjs/toolkit";
import { api } from "./api";

export const rootReducer = combineReducers({
  [api.currentWeather.reducerPath]: api.currentWeather.reducer,
  [api.forecastWeather.reducerPath]: api.forecastWeather.reducer,
});
