import React from "react";

const SearchBusRoute = ({
  selectCity,
  handleRouteMap,
  handleBusRouteCheck,
  searchBusRoute,
}) => {
  return (
      <div>
        {!searchBusRoute ||
        handleBusRouteCheck(searchBusRoute)[0] === undefined ? (
          <span>無台灣好行公車路線</span>
        ) : (
          <div className="btnBusrouteGroup">
            {handleBusRouteCheck(searchBusRoute).map((Route, index) => (
              <div
                key={index}
                className="btnBusroute"
                onClick={handleRouteMap}
              >
                {Route}
              </div>
            ))}
          </div>
        )}
      </div>
  );
};

export default SearchBusRoute;
