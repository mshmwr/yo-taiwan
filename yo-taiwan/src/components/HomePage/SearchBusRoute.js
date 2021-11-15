import React, { useState, useEffect } from "react";
import { doBusRouteSearch } from "../../apis/searchbusRouteApi";
import BusRoute from "./BusRoute";

const SearchBusRoute = (selectCity) => {
  const [searchBusRoute, setsearchBusRoute] = useState();
  const [selectBusRoute, setselectBusRoute] = useState();
  const searchBusRouteShpArray = [];

  useEffect(() => {
    async function fetchData() {
      setsearchBusRoute(await doBusRouteSearch());
    }
    fetchData();
  }, []);

  function BusRouteCheck(searchBusRoute) {
    const districtBusRoute = searchBusRoute.filter((route) =>
      (!route.City ? "" : route.City).includes(selectCity.selectCity)
    );
    searchBusRouteShpArray.push(districtBusRoute.map((name) => name));
    return districtBusRoute.map((name) => name.TaiwanTripName.Zh_tw);
  }

  const handleRouteMap = (e) => {
    setselectBusRoute(e.target.innerHTML);
    // searchBusRouteShpArray[0].filter(
    //   (r) => r.TaiwanTripName.Zh_tw === e.target.innerHTML);
  };

  return (
    <div>
      <div>
        {!searchBusRoute || BusRouteCheck(searchBusRoute)[0] === undefined ? (
          <span className="btn_busroute_default">無台灣好行公車路線</span>
        ) : (
          <div>
            {BusRouteCheck(searchBusRoute).map((Route, index) => (
              <span
                key={index}
                className="btn_busroute_default"
                onClick={(e) => handleRouteMap(e)}
              >
                {Route}
              </span>
            ))}
          </div>
        )}
      </div>
      <div>
        <BusRoute selectBusRoute={selectBusRoute} />
      </div>
    </div>
  );
};

export default SearchBusRoute;
