import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
  const [input, setinput] = useState("");
  const [dropdownDistrict, setdropdownDistrict] = useState("");
  const clickDropdown = (e) => {
    setdropdownDistrict(e.target.getAttribute("value"));
  };
  const clickSearch = () => {
    if (input === "" && dropdownDistrict === "") {
      return;
    }
    if (dropdownDistrict === "") {
      navigate(`/searchingResult/${input}`);
    } else {
      navigate(`/searchingResult/${input}+${dropdownDistrict}`);
    }
  };

  return (
    <div className="hero_section">
      <div className="hero_title">立即開始你的美好假期</div>
      <div className="hero_subtitle">跟著 YoTaiwan 一起遊台灣！</div>
      <div className="search_section">
        <div className="search_box">
          <div className="search_box_dropdown">
            <div className="default_option">
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
          <div className="search_field">
            <input
              type="text"
              className="search_field_input"
              placeholder="請輸入目的地、景點、公車路線等關鍵字"
              onChange={(e) => setinput(e.target.value)}
            />
            <button className="search_btn" onClick={clickSearch}>
              搜尋
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
