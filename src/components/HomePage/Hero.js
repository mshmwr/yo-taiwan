import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const [input, setinput] = useState("");
  const [dropdownAddress, setdropdownAddress] = useState("");
  const clickSearch = () => {
    if (input === "" && dropdownAddress === "") {
      return;
    }
    if (dropdownAddress === "") {
      navigate(`/searchingResult/${input}`);
    } else {
      navigate(`/searchingResult/${input}+${dropdownAddress}`);
    }
  };

  return (
    <div className="hero_section">
      <div className="hero_title">立即開始你的美好假期</div>
      <div className="hero_subtitle">跟著 YoTaiwan 一起遊台灣！</div>
      <div className="search_section">
        <div className="search_box">
          <div className="search_box_dropdown">
            <div className="default_option">不分縣市</div>
            <ul>
              <li>基隆市</li>
              <li>台北市</li>
              <li>新北市</li>
            </ul>
          </div>
          <div className="search_field">
            <input
              type="text"
              className="search_field_input"
              placeholder="請輸入目的地、景點、公車路線等關鍵字"
              onChange={(e) => setinput(e.target.value)}
            />
            <button class="search_btn" onClick={clickSearch}>
              搜尋
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
