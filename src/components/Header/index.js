import React from "react";
import { Link } from "react-router-dom";
import { getyoTaiwanLogoIcon } from "../../utils/iconUtilis";
import HeaderSearch from "../HeaderSearch";
import SelectBar from "../SelectBar";
import { SelectBarTraffic } from "../SelectBar";
import "./style.scss";

const Header = ({ showSearch }) => {
  return (
    <div className="header">
      <input type="checkbox" name="" id="menuControl"></input>
      <div className="container">
        <label htmlFor="menuControl" className="menuBtn">
          <span>選單</span>
        </label>
        <Link className="headerLogo" to="/">{getyoTaiwanLogoIcon()}</Link>
        <div className={showSearch === "show" ? "show" : "hide"}>
          <HeaderSearch />
        </div>
        <div className="navMenu">
          <Link to="/TravelFeaturedPage" className="menuLandscape">
            觀光景點
          </Link>
          <span className="menuFair">
            <Link to="/TopicTravelPage" className="menuFairLink">
              主題旅遊
            </Link>
            <SelectBar />
          </span>
          <Link to="/foodFeaturedPage" className="menuFood">
            特色美食
          </Link>
          <span className="menuTraffic">
            <Link to="/" className="menuTrafficLink">
              交通資訊
            </Link>
            <SelectBarTraffic />
          </span>
          <button className="btnCallForAction">今天想去哪？</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
