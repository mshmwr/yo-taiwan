import React from "react";
import { Link } from "react-router-dom";
import { getBusIcon, getLocationIcon } from "../../utils/iconUtilis";
import { splitAddressToCityAndDistrict } from "../../utils/addressUtils";
import Weather from "../Weather";
import "./style.scss";

function Spots({ spots, page }) {
  if (!spots) return null;

  return (
    <>
      {spots.map((spot) => (
        <Spot spot={spot} page={page} />
      ))}
    </>
  );
}

function Spot({ spot, page }) {
  const addressItems = splitAddressToCityAndDistrict(spot.Address);

  return (
    <Link
      to={{
        pathname: `/${page}/${spot.ScenicSpotID || spot.RestaurantID}`,
      }}
      style={{ textDecoration: "none" }}
    >
      <div className="landscapeBlock">
        <div className="imageBlock">
          <img alt={spot.Name} src={spot.Picture.PictureUrl1} />
        </div>
        <div className="contentBlock">
          {spot.ScenicSpotName}
          {spot?.Bus && (
            <div className="tagBus">
              {getBusIcon()}
              {spot.Bus}
            </div>
          )}
          <div className="tagLocation">
            {getLocationIcon()}
            {`${addressItems.city}, ${addressItems.district}`}
          </div>
          <Weather city={addressItems.city} />
        </div>
      </div>
    </Link>
  );
}

export default React.memo(Spots);
