import React, { useState, useEffect } from "react";
import MapLayer from "../Common/map";
import { doBusRouteShp } from "../../apis/searchApiRouteShp";

const BusRouteMap = ({ selectBusRoute }) => {
  const [BusRouteShp, setBusRouteShp] = useState();
  useEffect(() => {
    async function fetchData() {
      setBusRouteShp(await doBusRouteShp(selectBusRoute));
    }
    fetchData();
  }, [selectBusRoute]);
  console.log(BusRouteShp);

  let geoFeature;
  if (BusRouteShp === undefined || BusRouteShp === null) {
    return null;
  } else {
    geoFeature = {
      polyline: BusRouteShp[0],
      pathOptions: { color: "lime" },
      markOptions: { color: "red" },
      center: BusRouteShp[Math.round(BusRouteShp.length / 2)],
      zoom: 8,
      maker: BusRouteShp[0],
      popup: BusRouteShp[1],
    };
  }

  return (
    <div>
      {BusRouteShp === undefined || BusRouteShp === null ? (
        <div>無路線資料</div>
      ) : (
        <MapLayer BusRouteShp={BusRouteShp} geoFeature={geoFeature} />
      )}
    </div>
  );
};
export default BusRouteMap;
