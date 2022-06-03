import React, { useState, useEffect } from "react";
import MapLayer from "./map";
import { doBusRouteSearch, doBusRouteShp } from "@apis/searchBusRoute";

const BusRouteMap = ({ selectBusRoute }) => {
  const [BusRouteShp, setBusRouteShp] = useState();
  useEffect(() => {
    async function fetchData() {
      const getBusRouteShp = async (busName = "") => {
        let resResult = null;

        const res = await doBusRouteSearch(busName);
        const busId = res[0].RouteUID ? res[0].RouteUID : "";
        if (busId === "") console.warn("無該路線");
        //reqBusRoute
        const resShp = await doBusRouteShp();
        const busRouteData = resShp.find((route) => route.RouteUID === busId);
        if (!busRouteData) {
          console.warn("未找到該路線圖");
          return null;
        }
        resResult = busRouteData.Geometry.slice(11, -1)
          .split(",")
          .map((loc) => loc.split())
          .map((locxy) =>
            locxy[0]
              .split(" ")
              .reverse()
              .map((val) => Number(val))
          );
        return resResult;
      };

      setBusRouteShp(await getBusRouteShp(selectBusRoute));
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
