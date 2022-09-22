import { RawCurrentWeather } from './apiRawResponseTypes';

export const mockCurrentWeather: RawCurrentWeather = {
  coord: {
    lon: 9.1895,
    lat: 45.4643,
  },
  weather: [
    {
      id: 800,
      main: 'Clear',
      description: 'clear sky',
      icon: '01n',
    },
  ],
  base: 'stations',
  main: {
    temp: 288.26,
    feels_like: 287.29,
    temp_min: 285.78,
    temp_max: 289.96,
    pressure: 1022,
    humidity: 56,
  },
  visibility: 10000,
  wind: {
    speed: 3.13,
    deg: 87,
    gust: 4.47,
  },
  clouds: {
    all: 0,
  },
  dt: 1663799821,
  sys: {
    type: 2,
    id: 2012644,
    country: 'IT',
    sunrise: 1663823395,
    sunset: 1663867333,
  },
  timezone: 7200,
  id: 3173435,
  name: 'Milan',
  cod: 200,
};
