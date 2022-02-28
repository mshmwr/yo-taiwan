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
      <div className="header_container">
        <Link to="/">{getyoTaiwanLogoIcon()}</Link>
        <div className={showSearch === "show" ? "show" : "hide"}>
          <HeaderSearch />
        </div>
        <div className="nav_menu">
          <Link to="/" className="menu_landscape">
            觀光景點
            <img className="wave_blue1" src={waveBlue} alt="wave_blue" />
          </Link>
          <Link to="/" className="menu_fair">
            主題旅遊
            <img className="wave_yellow" src={waveYellow} alt="wave_Yellow" />
            <SelectBar />
          </Link>
          <Link to="/" className="menu_food">
            特色美食
            <img className="wave_pink" src={wavePink} alt="wave_Pink" />
          </Link>
          <Link to="/" className="menu_traffic">
            交通資訊
            <img className="wave_blue2" src={waveBlue} alt="wave_blue" />
            <SelectBarTraffic />
          </Link>
          <button className="btn_callForAction">今天想去哪？</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
