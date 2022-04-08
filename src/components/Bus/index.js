import React, { useState, useEffect } from "react";
import SearchBusRoute from "./SearchBusRoute";
import BusRouteMap from "./busMap/BusRouteMap";
import { doBusRouteSearch } from "../../apis/searchbusRouteApi";
import "./style.scss";

const Bus = () => {
  const [selectRegion, setselectRegion] = useState("北部");
  const [selectCity, setselectCity] = useState("Taoyuan");
  const [selectBusRoute, setselectBusRoute] = useState();
  const [searchBusRoute, setsearchBusRoute] = useState();
  const DistrictBusData = [
    {
      region: "北部",
      cities: [
        ["宜蘭縣", "YilanCounty"],
        ["基隆市", "Keelung"],
        ["台北市", "Taipei"],
        ["新北市", "NewTaipei"],
        ["桃園市", "Taoyuan"],
        ["新竹縣", "Hsinchu"],
      ],
    },
    {
      region: "中部",
      cities: [
        ["臺中市", "Taichung"],
        ["苗栗縣", "Miaoli"],
        ["彰化縣", "Changhua"],
        ["南投縣", "Nantou"],
        ["雲林縣", "Yunlin"],
      ],
    },
    {
      region: "南部",
      cities: [
        ["高雄市", "Kaohsiung"],
        ["臺南市", "Tainan"],
        ["嘉義市", "Chiayi"],
        ["嘉義縣", "Chiayi"],
        ["屏東縣", "PingtungCounty"],
      ],
    },
    {
      region: "東部",
      cities: [
        ["花蓮縣", "HualienCounty"],
        ["臺東縣", "Taitung"],
      ],
    },
    {
      region: "離島",
      cities: [
        ["澎湖縣", "Penghu"],
        ["金門縣", "Kinmen"],
        ["連江縣", "Lienchiang"],
      ],
    },
  ];
  const searchBusRouteShpArray = [];
  //將searchBusRoute搜尋資料傳遞到這裡，在將路線座標傳進BusRouteMap
  useEffect(() => {
    async function fetchData() {
      setsearchBusRoute(await doBusRouteSearch());
    }
    fetchData();
  }, []);

  function BusRouteCheck(searchBusRoute) {
    const districtBusRoute = searchBusRoute.filter((route) =>
      (!route.City ? "" : route.City).includes(selectCity)
    );

    searchBusRouteShpArray.push(districtBusRoute.map((name) => name));
    return districtBusRoute.map((name) => name.TaiwanTripName.Zh_tw);
  }

  function handleClick(e) {
    setselectRegion(e.target.innerHTML);
  }
  function handleCityClick(e) {
    setselectCity(e.target.getAttribute("value"));
  }

  const getBusRoute = (e) => {
    setselectBusRoute(e.target.innerHTML);
  };

  return (
    <div>
      <div className="busSection">
        <span className="sectionTitle">台灣好行公車路線</span>
        <ul className="tabGroup">
          <li className="active-tab">
            北部
          </li>
          {DistrictBusData.map((r, index) => {
            return (
              <li
                key={index}
                className="tab"
                onClick={handleClick}
              >
                {r.region}
              </li>
            );
          })}
        </ul>
        <div className="block">
          <div className="btnCountiresGroup">
            {DistrictBusData.filter(
              (r) => r.region === selectRegion
            )[0].cities.map((cities, index) => {
              return (
                <span
                  key={index}
                  className="btnCountry"
                  value={cities[1]}
                  onClick={handleCityClick}
                >
                  {cities[0]}
                </span>
              );
            })}
          </div>
          <div className="btnBusrouteGroup">
            <SearchBusRoute
              selectCity={selectCity}
              handleRouteMap={getBusRoute}
              handleBusRouteCheck={BusRouteCheck}
              searchBusRoute={searchBusRoute}
            />
        </div>

        </div>
      
        <div className="busRoute">
          {!selectBusRoute ? (
            <img
              src="https://img.icons8.com/external-itim2101-lineal-color-itim2101/64/000000/external-map-travel-itim2101-lineal-color-itim2101.png"
              style={{
                position: "absolute",
                top: "35%",
                left: "45%",
                height: "25%",
              }}
              alt="mapIcon"
            ></img>
          ) : (
            <BusRouteMap selectBusRoute={selectBusRoute} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Bus;
