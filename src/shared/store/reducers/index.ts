import { combineReducers } from '@reduxjs/toolkit';
import { api } from './api';

export const rootReducer = combineReducers({
  [api.openWeather.reducerPath]: api.openWeather.reducer,
});
