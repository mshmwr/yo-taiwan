import React from "react";

const SearchBusRoute = ({
  selectCity,
  handleRouteMap,
  handleBusRouteCheck,
  searchBusRoute,
}) => {
  return (
    <div>
      <div>
        {!searchBusRoute ||
        handleBusRouteCheck(searchBusRoute)[0] === undefined ? (
          <span className="btn_busroute_default">無台灣好行公車路線</span>
        ) : (
          <div>
            {handleBusRouteCheck(searchBusRoute).map((Route, index) => (
              <span
                key={index}
                className="btn_busroute_default"
                onClick={handleRouteMap}
              >
                {Route}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBusRoute;
