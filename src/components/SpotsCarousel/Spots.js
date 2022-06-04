import React from "react";
import { Link } from "react-router-dom";
import { getBusIcon, getLocationIcon } from "@utils/iconUtilis";
import { splitAddressToCityAndDistrict } from "@utils/addressUtils";
import Weather from "../Weather";
import "./style.scss";

function Spots({ spots, pathnameConfig }) {
  if (!spots || !pathnameConfig) return null;
  return (
    <>
      {spots.map((spot) => (
        <Spot
          key={spot.ScenicSpotID}
          spot={spot}
          pathnameConfig={pathnameConfig}
        />
      ))}
    </>
  );
}

function Spot({ spot, pathnameConfig }) {
  const addressItems = splitAddressToCityAndDistrict(spot.Address);

  return (
    <Link
      to={{
        pathname: `/${pathnameConfig.page}/${spot[pathnameConfig.spotID]}`,
      }}
      style={{ textDecoration: "none" }}
    >
      {console.log(spot[pathnameConfig])}
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
