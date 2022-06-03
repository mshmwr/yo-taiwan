import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PLUS_SYMBOL } from "@utils/constants";
import "./hero.scss";

const DistrictListData = [
  "不分縣市",
  "宜蘭縣",
  "基隆市",
  "台北市",
  "新北市",
  "桃園市",
  "新竹縣",
  "臺中市",
  "苗栗縣",
  "彰化縣",
  "南投縣",
  "雲林縣",
  "高雄市",
  "臺南市",
  "嘉義市",
  "嘉義縣",
  "屏東縣",
  "花蓮縣",
  "臺東縣",
];

const Hero = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [dropdownDistrict, setDropdownDistrict] = useState("");
  const clickDropdown = (e) => {
    setDropdownDistrict(e.target.getAttribute("value"));
  };
  const clickSearch = () => {
    if (!input && !dropdownDistrict) {
      return;
    }
    if (input && dropdownDistrict) {
      navigate(`/searchingResult/${dropdownDistrict}${PLUS_SYMBOL}${input}`);
      return;
    }

    if (dropdownDistrict) {
      navigate(`/searchingResult/${dropdownDistrict}`);
      return;
    }
    if (input) {
      navigate(`/searchingResult/${input}`);
    }
  };

  return (
    <div className="heroSection">
      <div className="title">立即開始你的美好假期</div>
      <div className="subtitle">跟著 YoTaiwan 一起遊台灣！</div>
      <div className="searchSection">
        <div className="searchBox">
          <div className="dropdown">
            <div className="defaultOption">
              {dropdownDistrict === "" ? DistrictListData[0] : dropdownDistrict}
            </div>
            <ul>
              {DistrictListData.map((city) => (
                <li key={city} value={city} onClick={clickDropdown}>
                  {city}
                </li>
              ))}
            </ul>
          </div>
          <div className="searchField">
            <input
              type="text"
              className="input"
              placeholder="請輸入目的地、景點、公車路線等關鍵字"
              onChange={(e) => setInput(e.target.value)}
            />
            <button className="searchBtn" onClick={clickSearch}>
              搜尋
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
