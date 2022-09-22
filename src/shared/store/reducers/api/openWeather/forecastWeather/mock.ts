import { RawForecastWeather } from './apiRawResponseTypes';

export const mockForecastWeather: RawForecastWeather = {
  cod: '200',
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1663804800,
      main: {
        temp: 288.21,
        feels_like: 287.23,
        temp_min: 285.99,
        temp_max: 288.21,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 1007,
        humidity: 56,
        temp_kf: 2.22,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 2.12,
        deg: 71,
        gust: 4.76,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2022-09-22 00:00:00',
    },
    {
      dt: 1663815600,
      main: {
        temp: 287.73,
        feels_like: 286.73,
        temp_min: 286.78,
        temp_max: 287.73,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 1006,
        humidity: 57,
        temp_kf: 0.95,
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02n',
        },
      ],
      clouds: {
        all: 24,
      },
      wind: {
        speed: 1.64,
        deg: 74,
        gust: 3.11,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2022-09-22 03:00:00',
    },
    {
      dt: 1663826400,
      main: {
        temp: 287.1,
        feels_like: 286.04,
        temp_min: 286.55,
        temp_max: 287.1,
        pressure: 1022,
        sea_level: 1022,
        grnd_level: 1006,
        humidity: 57,
        temp_kf: 0.55,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 53,
      },
      wind: {
        speed: 1.24,
        deg: 128,
        gust: 1.96,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2022-09-22 06:00:00',
    },
    {
      dt: 1663837200,
      main: {
        temp: 290.63,
        feels_like: 289.58,
        temp_min: 290.63,
        temp_max: 290.63,
        pressure: 1022,
        sea_level: 1022,
        grnd_level: 1006,
        humidity: 44,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02d',
        },
      ],
      clouds: {
        all: 22,
      },
      wind: {
        speed: 1.85,
        deg: 129,
        gust: 2.03,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2022-09-22 09:00:00',
    },
    {
      dt: 1663848000,
      main: {
        temp: 293.4,
        feels_like: 292.45,
        temp_min: 293.4,
        temp_max: 293.4,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 1004,
        humidity: 37,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03d',
        },
      ],
      clouds: {
        all: 30,
      },
      wind: {
        speed: 2.28,
        deg: 120,
        gust: 1.64,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2022-09-22 12:00:00',
    },
    {
      dt: 1663858800,
      main: {
        temp: 293.65,
        feels_like: 292.7,
        temp_min: 293.65,
        temp_max: 293.65,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 1003,
        humidity: 36,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02d',
        },
      ],
      clouds: {
        all: 19,
      },
      wind: {
        speed: 2.68,
        deg: 124,
        gust: 2.3,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2022-09-22 15:00:00',
    },
    {
      dt: 1663869600,
      main: {
        temp: 290.19,
        feels_like: 289.2,
        temp_min: 290.19,
        temp_max: 290.19,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 1003,
        humidity: 48,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      clouds: {
        all: 9,
      },
      wind: {
        speed: 2.29,
        deg: 113,
        gust: 4.71,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2022-09-22 18:00:00',
    },
    {
      dt: 1663880400,
      main: {
        temp: 288,
        feels_like: 287,
        temp_min: 288,
        temp_max: 288,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 1004,
        humidity: 56,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 2.41,
        deg: 87,
        gust: 5.44,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2022-09-22 21:00:00',
    },
    {
      dt: 1663891200,
      main: {
        temp: 286.71,
        feels_like: 285.71,
        temp_min: 286.71,
        temp_max: 286.71,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 1005,
        humidity: 61,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 2.27,
        deg: 68,
        gust: 5.44,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2022-09-23 00:00:00',
    },
    {
      dt: 1663902000,
      main: {
        temp: 285.99,
        feels_like: 285,
        temp_min: 285.99,
        temp_max: 285.99,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 1005,
        humidity: 64,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 1.33,
        deg: 80,
        gust: 2.01,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2022-09-23 03:00:00',
    },
    {
      dt: 1663912800,
      main: {
        temp: 285.74,
        feels_like: 284.75,
        temp_min: 285.74,
        temp_max: 285.74,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 1005,
        humidity: 65,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      clouds: {
        all: 1,
      },
      wind: {
        speed: 0.9,
        deg: 112,
        gust: 1.22,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2022-09-23 06:00:00',
    },
    {
      dt: 1663923600,
      main: {
        temp: 290.57,
        feels_like: 289.59,
        temp_min: 290.57,
        temp_max: 290.57,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 1005,
        humidity: 47,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02d',
        },
      ],
      clouds: {
        all: 11,
      },
      wind: {
        speed: 1.3,
        deg: 149,
        gust: 1.26,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2022-09-23 09:00:00',
    },
    {
      dt: 1663934400,
      main: {
        temp: 293.98,
        feels_like: 293.11,
        temp_min: 293.98,
        temp_max: 293.98,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 1003,
        humidity: 38,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03d',
        },
      ],
      clouds: {
        all: 27,
      },
      wind: {
        speed: 1.49,
        deg: 136,
        gust: 1.14,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2022-09-23 12:00:00',
    },
    {
      dt: 1663945200,
      main: {
        temp: 293.93,
        feels_like: 293.06,
        temp_min: 293.93,
        temp_max: 293.93,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1002,
        humidity: 38,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 98,
      },
      wind: {
        speed: 1.71,
        deg: 138,
        gust: 1.31,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2022-09-23 15:00:00',
    },
    {
      dt: 1663956000,
      main: {
        temp: 290.84,
        feels_like: 289.97,
        temp_min: 290.84,
        temp_max: 290.84,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1002,
        humidity: 50,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 96,
      },
      wind: {
        speed: 1.77,
        deg: 120,
        gust: 3.6,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2022-09-23 18:00:00',
    },
    {
      dt: 1663966800,
      main: {
        temp: 289.54,
        feels_like: 288.64,
        temp_min: 289.54,
        temp_max: 289.54,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 1002,
        humidity: 54,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.61,
        deg: 105,
        gust: 2.81,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2022-09-23 21:00:00',
    },
    {
      dt: 1663977600,
      main: {
        temp: 288.86,
        feels_like: 287.97,
        temp_min: 288.86,
        temp_max: 288.86,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 1002,
        humidity: 57,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.76,
        deg: 98,
        gust: 2.75,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2022-09-24 00:00:00',
    },
    {
      dt: 1663988400,
      main: {
        temp: 288.61,
        feels_like: 287.73,
        temp_min: 288.61,
        temp_max: 288.61,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1001,
        humidity: 58,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.71,
        deg: 104,
        gust: 2.83,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2022-09-24 03:00:00',
    },
    {
      dt: 1663999200,
      main: {
        temp: 288.45,
        feels_like: 287.6,
        temp_min: 288.45,
        temp_max: 288.45,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1001,
        humidity: 60,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.73,
        deg: 120,
        gust: 3.14,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2022-09-24 06:00:00',
    },
    {
      dt: 1664010000,
      main: {
        temp: 287.55,
        feels_like: 286.87,
        temp_min: 287.55,
        temp_max: 287.55,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1001,
        humidity: 70,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 0.93,
        deg: 47,
        gust: 2.07,
      },
      visibility: 10000,
      pop: 0.36,
      rain: {
        '3h': 0.31,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2022-09-24 09:00:00',
    },
    {
      dt: 1664020800,
      main: {
        temp: 287.31,
        feels_like: 286.87,
        temp_min: 287.31,
        temp_max: 287.31,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1001,
        humidity: 80,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.22,
        deg: 31,
        gust: 2.4,
      },
      visibility: 10000,
      pop: 0.37,
      rain: {
        '3h': 0.58,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2022-09-24 12:00:00',
    },
    {
      dt: 1664031600,
      main: {
        temp: 287.58,
        feels_like: 287.19,
        temp_min: 287.58,
        temp_max: 287.58,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1000,
        humidity: 81,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.43,
        deg: 56,
        gust: 2.8,
      },
      visibility: 10000,
      pop: 0.25,
      rain: {
        '3h': 0.23,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2022-09-24 15:00:00',
    },
    {
      dt: 1664042400,
      main: {
        temp: 286.89,
        feels_like: 286.54,
        temp_min: 286.89,
        temp_max: 286.89,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1000,
        humidity: 85,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.24,
        deg: 104,
        gust: 2.29,
      },
      visibility: 10000,
      pop: 0.27,
      rain: {
        '3h': 0.26,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2022-09-24 18:00:00',
    },
    {
      dt: 1664053200,
      main: {
        temp: 286.59,
        feels_like: 286.31,
        temp_min: 286.59,
        temp_max: 286.59,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1000,
        humidity: 89,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.63,
        deg: 78,
        gust: 3.09,
      },
      visibility: 10000,
      pop: 0.23,
      rain: {
        '3h': 0.49,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2022-09-24 21:00:00',
    },
    {
      dt: 1664064000,
      main: {
        temp: 286.71,
        feels_like: 286.42,
        temp_min: 286.71,
        temp_max: 286.71,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 999,
        humidity: 88,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.03,
        deg: 58,
        gust: 1.78,
      },
      visibility: 10000,
      pop: 0.35,
      rain: {
        '3h': 0.21,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2022-09-25 00:00:00',
    },
    {
      dt: 1664074800,
      main: {
        temp: 287,
        feels_like: 286.74,
        temp_min: 287,
        temp_max: 287,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 998,
        humidity: 88,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 0.71,
        deg: 344,
        gust: 1.37,
      },
      visibility: 10000,
      pop: 0.05,
      sys: {
        pod: 'n',
      },
      dt_txt: '2022-09-25 03:00:00',
    },
    {
      dt: 1664085600,
      main: {
        temp: 286.79,
        feels_like: 286.59,
        temp_min: 286.79,
        temp_max: 286.79,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 997,
        humidity: 91,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 0.17,
        deg: 136,
        gust: 0.3,
      },
      visibility: 10000,
      pop: 0.65,
      rain: {
        '3h': 0.58,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2022-09-25 06:00:00',
    },
    {
      dt: 1664096400,
      main: {
        temp: 287.88,
        feels_like: 287.68,
        temp_min: 287.88,
        temp_max: 287.88,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 997,
        humidity: 87,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 0.91,
        deg: 41,
        gust: 1.6,
      },
      visibility: 10000,
      pop: 0.97,
      rain: {
        '3h': 1.25,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2022-09-25 09:00:00',
    },
    {
      dt: 1664107200,
      main: {
        temp: 287.7,
        feels_like: 287.59,
        temp_min: 287.7,
        temp_max: 287.7,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 995,
        humidity: 91,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.1,
        deg: 3,
        gust: 2.22,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        '3h': 2.72,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2022-09-25 12:00:00',
    },
    {
      dt: 1664118000,
      main: {
        temp: 287.09,
        feels_like: 287.02,
        temp_min: 287.09,
        temp_max: 287.09,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 994,
        humidity: 95,
        temp_kf: 0,
      },
      weather: [
        {
          id: 501,
          main: 'Rain',
          description: 'moderate rain',
          icon: '10d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.92,
        deg: 291,
        gust: 3.96,
      },
      visibility: 7246,
      pop: 1,
      rain: {
        '3h': 5.54,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2022-09-25 15:00:00',
    },
    {
      dt: 1664128800,
      main: {
        temp: 287.05,
        feels_like: 286.95,
        temp_min: 287.05,
        temp_max: 287.05,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 993,
        humidity: 94,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.14,
        deg: 248,
        gust: 3.39,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        '3h': 1.6,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2022-09-25 18:00:00',
    },
    {
      dt: 1664139600,
      main: {
        temp: 286.81,
        feels_like: 286.69,
        temp_min: 286.81,
        temp_max: 286.81,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 993,
        humidity: 94,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.97,
        deg: 274,
        gust: 4.43,
      },
      visibility: 10000,
      pop: 0.72,
      rain: {
        '3h': 1.27,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2022-09-25 21:00:00',
    },
    {
      dt: 1664150400,
      main: {
        temp: 286.65,
        feels_like: 286.48,
        temp_min: 286.65,
        temp_max: 286.65,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 994,
        humidity: 93,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.44,
        deg: 251,
        gust: 5.05,
      },
      visibility: 10000,
      pop: 0.59,
      sys: {
        pod: 'n',
      },
      dt_txt: '2022-09-26 00:00:00',
    },
    {
      dt: 1664161200,
      main: {
        temp: 286.58,
        feels_like: 286.35,
        temp_min: 286.58,
        temp_max: 286.58,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 994,
        humidity: 91,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.15,
        deg: 264,
        gust: 5.16,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2022-09-26 03:00:00',
    },
    {
      dt: 1664172000,
      main: {
        temp: 285.87,
        feels_like: 285.6,
        temp_min: 285.87,
        temp_max: 285.87,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 994,
        humidity: 92,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 93,
      },
      wind: {
        speed: 1.93,
        deg: 242,
        gust: 3.97,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2022-09-26 06:00:00',
    },
    {
      dt: 1664182800,
      main: {
        temp: 290.05,
        feels_like: 289.52,
        temp_min: 290.05,
        temp_max: 290.05,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 995,
        humidity: 66,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 59,
      },
      wind: {
        speed: 1.73,
        deg: 267,
        gust: 2.41,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2022-09-26 09:00:00',
    },
    {
      dt: 1664193600,
      main: {
        temp: 293.9,
        feels_like: 293.28,
        temp_min: 293.9,
        temp_max: 293.9,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 995,
        humidity: 48,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03d',
        },
      ],
      clouds: {
        all: 33,
      },
      wind: {
        speed: 1.5,
        deg: 239,
        gust: 1.83,
      },
      visibility: 10000,
      pop: 0.11,
      sys: {
        pod: 'd',
      },
      dt_txt: '2022-09-26 12:00:00',
    },
    {
      dt: 1664204400,
      main: {
        temp: 294.16,
        feels_like: 293.6,
        temp_min: 294.16,
        temp_max: 294.16,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 993,
        humidity: 49,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      clouds: {
        all: 6,
      },
      wind: {
        speed: 1.86,
        deg: 183,
        gust: 1.75,
      },
      visibility: 10000,
      pop: 0.42,
      sys: {
        pod: 'd',
      },
      dt_txt: '2022-09-26 15:00:00',
    },
    {
      dt: 1664215200,
      main: {
        temp: 290.22,
        feels_like: 289.91,
        temp_min: 290.22,
        temp_max: 290.22,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 993,
        humidity: 74,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      clouds: {
        all: 7,
      },
      wind: {
        speed: 1.17,
        deg: 208,
        gust: 1.24,
      },
      visibility: 10000,
      pop: 0.59,
      rain: {
        '3h': 1.26,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2022-09-26 18:00:00',
    },
    {
      dt: 1664226000,
      main: {
        temp: 288.71,
        feels_like: 288.49,
        temp_min: 288.71,
        temp_max: 288.71,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 994,
        humidity: 83,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      clouds: {
        all: 62,
      },
      wind: {
        speed: 0.65,
        deg: 189,
        gust: 1.06,
      },
      visibility: 10000,
      pop: 0.38,
      rain: {
        '3h': 1.06,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2022-09-26 21:00:00',
    },
  ],
  city: {
    id: 3173435,
    name: 'Milan',
    coord: {
      lat: 45.4643,
      lon: 9.1895,
    },
    country: 'IT',
    population: 1000000,
    timezone: 7200,
    sunrise: 1663823395,
    sunset: 1663867333,
  },
};
