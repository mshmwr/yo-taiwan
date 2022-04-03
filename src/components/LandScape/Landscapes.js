import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import weatherApi from "../../apis/weatherApi";
import {
  getWeatherIcon,
  getBusIcon,
  getLocationIcon,
} from "../../utils/iconUtilis";
import { splitAddressToCityAndDistrict } from "../../utils/addressUtils";

function Landscapes({ landscapes }) {
  const [weather, setWeather] = useState({});
  useEffect(() => {
    async function fetchData() {
      const resWeathers = await weatherApi();
      if (resWeathers) {
        const weather = resWeathers.records.location.reduce((prev, curr) => {
          prev = {
            ...prev,
            [curr.locationName]: curr.weatherElement[0].time[0].parameter,
          };
          return prev;
        }, {});
        setWeather(weather);
      }
    }
    fetchData();
  }, []);

  if (!landscapes) return null;

  return (
    <>
      {landscapes.map((landscape) => (
        <LandScape landscape={landscape} weather={weather} />
      ))}
    </>
  );
}

function LandScape({ landscape, weather }) {
  const addressItems = splitAddressToCityAndDistrict(landscape.Address);

  return (
    <Link
      to={{
        pathname: `/tripInfoPage/${landscape.ScenicSpotID}`,
      }}
      style={{ textDecoration: "none" }}
    >
      <div>
        <div className="landscape_block">
          <div className="image_block">
            <img alt={landscape.Name} src={landscape.Picture.PictureUrl1} />
          </div>
          <div className="content_block">
            {landscape.ScenicSpotName}
            {landscape?.Bus && (
              <div className="tag_bus">
                {getBusIcon()}
                {landscape.Bus}
              </div>
            )}

            <div className="tag_location">
              {getLocationIcon()}
              {`${addressItems.city}, ${addressItems.district}`}
            </div>
            {Object.keys(weather).length !== 0 && (
              <div className="weather">
                {getWeatherIcon(weather[addressItems.city].parameterName)}
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default React.memo(Landscapes);
