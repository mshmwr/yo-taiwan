import React, { useState, useEffect } from "react";
import MapLayer from "./map";
import { doBusRouteShp } from "../../../apis/searchApiRouteShp";

const BusRouteMap = ({ selectBusRoute }) => {
  const [BusRouteShp, setBusRouteShp] = useState();
  useEffect(() => {
    async function fetchData() {
      setBusRouteShp(await doBusRouteShp(selectBusRoute));
    }
    fetchData();
  }, [selectBusRoute]);

  let geoFeature;
  let noMapInfo;

  if (BusRouteShp === undefined || BusRouteShp === null) {
    noMapInfo = {
      textAlign: "center",
      marginTop: "15%",
      fontSize: "30px",
      fontWeight: "bolder",
    };
  } else {
    geoFeature = {
      polyline: BusRouteShp,
      pathOptions: { color: "blue" },
      markOptions: { color: "red" },
      center: BusRouteShp[Math.round(BusRouteShp.length / 2)],
      zoom: (8 * BusRouteShp.length) / 1000,
    };
  }

  return (
    <div>
      {BusRouteShp === null || BusRouteShp === undefined ? (
        <div style={noMapInfo}>尚未取得該路線資料</div>
      ) : (
        <MapLayer BusRouteShp={BusRouteShp} geoFeature={geoFeature} />
      )}
    </div>
  );
};
export default BusRouteMap;
