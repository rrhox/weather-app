import React from "react";

import { Button } from "./shared/components/atomic/Button";

import { useGetCurrentWeatherByCityQuery } from "./shared/store/reducers/api/currentWeather";
import { useGetForecastWeatherByCityQuery } from "./shared/store/reducers/api/forecastWeather";

function App() {
  const {
    data: currentWeather,
    error: errorCurrentWeather,
    isLoading: isLoadingCurrentWeather,
  } = useGetCurrentWeatherByCityQuery("milan");
  const {
    data: forecastWeather,
    error: errorForecastWeather,
    isLoading: isLoadingForecastWeather,
  } = useGetForecastWeatherByCityQuery("milan");

  return (
    <div>
      <div>
        <Button>hwllo world</Button>
      </div>
      <code>
        {errorCurrentWeather ? (
          <>Oh no, there was an error</>
        ) : isLoadingCurrentWeather ? (
          <>Loading...</>
        ) : currentWeather ? (
          <>
            <h3>{JSON.stringify(currentWeather, null, 2)}</h3>
          </>
        ) : null}
      </code>

      <code>
        {errorForecastWeather ? (
          <>Oh no, there was an error</>
        ) : isLoadingForecastWeather ? (
          <>Loading...</>
        ) : forecastWeather ? (
          <>
            <h3>{JSON.stringify(forecastWeather, null, 2)}</h3>
          </>
        ) : null}
      </code>
    </div>
  );
}

export default App;
