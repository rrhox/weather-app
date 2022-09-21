import { configureStore, PreloadedState } from '@reduxjs/toolkit';
import { api } from './reducers/api';
import { rootReducer } from './reducers';

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.currentWeather.middleware),
    preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
