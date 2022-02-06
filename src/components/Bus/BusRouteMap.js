import React, { useState, useEffect } from "react";
import MapLayer from "../Map";
import { doBusRouteShp } from "../../apis/searchApiRouteShp";

const BusRouteMap = ({ selectBusRoute }) => {
  const [BusRouteShp, setBusRouteShp] = useState();
  useEffect(() => {
    async function fetchData() {
      setBusRouteShp(await doBusRouteShp(selectBusRoute));
      console.log("13");
    }
    fetchData();
  }, [selectBusRoute]);

  let geoFeature;

  if (BusRouteShp === undefined || BusRouteShp === null) {
    console.log(BusRouteShp);
  } else {
    console.log(BusRouteShp.length);
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
        <div
          style={{
            textAlign: "center",
            marginTop: "15%",
            fontSize: "30px",
            fontWeight: "bolder",
          }}
        >
          尚未取得該路線資料
        </div>
      ) : (
        <MapLayer BusRouteShp={BusRouteShp} geoFeature={geoFeature} />
      )}
    </div>
  );
};
export default BusRouteMap;
