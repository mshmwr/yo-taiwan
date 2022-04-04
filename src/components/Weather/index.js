import React, { useContext } from "react";
import { WeatherContext } from "../../contexts";
import { getWeatherIcon } from "../../utils/iconUtilis";
export default function Weather({ city }) {
  const weather = useContext(WeatherContext);
  if (!Object.keys(weather).length || !city) return null;
  return (
    <>
      <div className="weather">
        {getWeatherIcon(weather[city].parameterName)}
      </div>
    </>
  );
}
