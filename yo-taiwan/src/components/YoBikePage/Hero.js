import React from "react";
import { getMyLocationIcon } from "../../utils/iconUtilis";
const Hero = () => {
  return (
    <div className="hero_section">
      <div className="hero_title">來趟愜意的自行車之旅</div>
      <div className="hero_subtitle">跟著 YoBike一起遊台灣自行車路線！</div>
      <div className="search_section">
        <div className="search_box">
          <div className="search_field">
            <input
              type="text"
              className="search_field_input"
              placeholder="輸入地址搜尋附近站點"
            />
          </div>
          <div className="btn_group">
            <button className="search_btn">搜尋</button>
            <button className="locate_btn">
              {getMyLocationIcon()}
              定位搜尋
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
