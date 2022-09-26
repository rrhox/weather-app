import { createSlice } from '@reduxjs/toolkit';

type CityFoundState = string;

const initialState: CityFoundState = 'milan';

export const mainCitySlice = createSlice({
  name: 'mainCity',
  initialState,
  reducers: {
    searchCity: (state, city) => {
      state = city.payload;
      return state;
    },
    resetSearchCity: (state) => {
      state = initialState;
      return state;
    },
  },
});

export const { searchCity, resetSearchCity } = mainCitySlice.actions;

export default mainCitySlice.reducer;
