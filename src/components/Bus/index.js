import React, { useState, useEffect } from "react";
import SearchBusRoute from "./SearchBusRoute";
import BusRouteMap from "./busMap/BusRouteMap";
import { doBusRouteSearch } from "@apis/searchbusRouteApi";
import "./style.scss";

const Bus = () => {
  const [selectRegion, setselectRegion] = useState(0);
  const [selectCity, setselectCity] = useState([""]);
  const [selectBusRoute, setselectBusRoute] = useState();
  const [searchBusRoute, setsearchBusRoute] = useState();
  const DistrictBusData = [
    {
      region: "北部",
      cities: [
        ["宜蘭縣", "YilanCounty"],
        ["基隆市", "Keelung"],
        ["臺北市", "Taipei"],
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
      (!route.City ? "" : route.City).includes(selectCity[1])
    );

    searchBusRouteShpArray.push(districtBusRoute.map((name) => name));
    return districtBusRoute.map((name) => name.TaiwanTripName.Zh_tw);
  }

  function handleClick(e) {
    setselectRegion(e.target.id);
  }

  const getBusRoute = (e) => {
    setselectBusRoute(e.target.innerHTML);
  };

  return (
    <div>
      <div className="busSection">
        <div className="sectionTitle">台灣好行公車路線</div>
        <div className="tabBlock">
          <div className="tabGroup">
            {DistrictBusData.map((r, index) =>
              +selectRegion === index ? (
                <div key={r.region} id={index} className="tabActive">
                  {r.region}
                </div>
              ) : (
                <div
                  key={r.region}
                  id={index}
                  className="tab"
                  onClick={handleClick}
                >
                  {r.region}
                </div>
              )
            )}
          </div>
          <div className="block">
            <div className="btnCountiresGroup">
              {DistrictBusData.filter(
                (r, index) => index === +selectRegion
              )[0].cities.map((c) =>
                selectCity[0] === c[0] ? (
                  <div key={c[0]} className="btnCountryActive">
                    {c[0]}
                  </div>
                ) : (
                  <div
                    key={c[0]}
                    className="btnCountry"
                    onClick={() => setselectCity(c)}
                  >
                    {c[0]}
                  </div>
                )
              )}
            </div>
            <div>
              <SearchBusRoute
                selectCity={selectCity}
                handleRouteMap={getBusRoute}
                handleBusRouteCheck={BusRouteCheck}
                searchBusRoute={searchBusRoute}
              />
            </div>
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
