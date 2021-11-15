import React, { useState } from "react";
import SearchBusRoute from "./SearchBusRoute";

const Bus = () => {
  const [selectRegion, setselectRegion] = useState("北部");
  const [selectCity, setselectCity] = useState("Taoyuan");
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

  function handleClick(e) {
    setselectRegion(e.target.innerHTML);
  }
  function handleCityClick(e) {
    setselectCity(e.target.getAttribute("value"));
  }

  return (
    <div>
      <div className="bus_section">
        <span className="section_title">台灣好行公車路線</span>
        <div className="block_tab_group">
          {DistrictBusData.map((r, index) => {
            return (
              <div
                key={index}
                className="block_tab_default"
                onClick={handleClick}
              >
                {r.region}
              </div>
            );
          })}
        </div>
        <div className="bus_block"></div>
        <div className="btn_countires_group">
          {DistrictBusData.filter(
            (r) => r.region === selectRegion
          )[0].cities.map((cities, index) => {
            return (
              <span
                key={index}
                className="btn_country_default"
                value={cities[1]}
                onClick={handleCityClick}
              >
                {cities[0]}
              </span>
            );
          })}
        </div>
        <div className="btn_busroute_group">
          <SearchBusRoute selectCity={selectCity} />
        </div>
      </div>
    </div>
  );
};

export default Bus;
