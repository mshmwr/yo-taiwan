import React, { useContext } from "react";
import { WeatherContext } from "../../contexts";
import { getWeatherIcon } from "../../utils/iconUtilis";
export default function Weather({ city }) {
  const weather = useContext(WeatherContext);
  return (
    <>
      {Object.keys(weather).length !== 0 && (
        <div className="weather">
          {getWeatherIcon(weather[city].parameterName)}
        </div>
      )}
    </>
  );
}
