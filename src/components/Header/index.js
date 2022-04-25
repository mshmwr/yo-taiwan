import React from "react";
import { Link } from "react-router-dom";
import waveBlue from "../../asset/icon/wave_blue.png";
import waveYellow from "../../asset/icon/wave_yellow.png";
import wavePink from "../../asset/icon/wave_pink.png";
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
        <label for="menuControl" className="menuBtn">
          <span>選單</span>
        </label>
        <Link className="headerLogo" to="/">{getyoTaiwanLogoIcon()}</Link>
        <div className={showSearch === "show" ? "show" : "hide"}>
          <HeaderSearch />
        </div>
        <div className="navMenu">
          <Link to="/TravelFeaturedPage" className="menuLandscape">
            觀光景點
            <img className="waveBlue1" src={waveBlue} alt="wave_blue" />
          </Link>
          <Link to="/TopicTravelPage" className="menuFair">
            主題旅遊
            <img className="waveYellow" src={waveYellow} alt="wave_Yellow" />
            <SelectBar />
          </Link>
          <Link to="/foodFeaturedPage" className="menuFood">
            特色美食
            <img className="wavePink" src={wavePink} alt="wave_Pink" />
          </Link>
          <Link to="/" className="menuTraffic">
            交通資訊
            <img className="waveBlue2" src={waveBlue} alt="wave_blue" />
            <SelectBarTraffic />
          </Link>
          <button className="btnCallForAction">今天想去哪？</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
