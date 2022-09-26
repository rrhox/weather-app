import { combineReducers } from '@reduxjs/toolkit';
import { api } from './api';
import mainCitySlice from './mainCitySlice';

export const rootReducer = combineReducers({
  [api.openWeather.reducerPath]: api.openWeather.reducer,
  mainCity: mainCitySlice,
});
