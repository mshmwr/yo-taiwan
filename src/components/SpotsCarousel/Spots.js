import React from "react";
import { Link } from "react-router-dom";
import { getBusIcon, getLocationIcon } from "../../utils/iconUtilis";
import { splitAddressToCityAndDistrict } from "../../utils/addressUtils";
import Weather from "../Weather";

function Spots({ landscapes }) {
  if (!landscapes) return null;

  return (
    <>
      {landscapes.map((landscape) => (
        <Spot landscape={landscape} />
      ))}
    </>
  );
}

function Spot({ landscape }) {
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
            <Weather city={addressItems.city} />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default React.memo(Spots);
